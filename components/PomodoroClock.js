import { useState } from "react";
import DisplaySession from "./DisplaySession";
import Length from "./Length";
import { playAudio, formatTime } from "utils";

const PomodoroClock = () => {
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const changeTime = (amount, type) => {
    if (type == "break") {
      if (breakTime <= 60 && amount < 0) {
        return;
      }
      setBreakTime((prev) => prev + amount);
    } else {
      if (sessionTime <= 60 && amount < 0) {
        return;
      }
      setSessionTime((prev) => prev + amount);
      if (!timerOn) {
        setDisplayTime(sessionTime + amount);
      }
    }
  };
  const controlTime = () => {
    const second = 1000; //1seg = 1000ms
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              playAudio();
              onBreakVariable = true;
              setOnBreak(true);
              return breakTime;
            } else if (prev <= 0 && onBreakVariable) {
              playAudio();
              onBreakVariable = false;
              setOnBreak(false);
              return sessionTime;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  };
  const resetTime = () => {
    setDisplayTime(25 * 60);
    setSessionTime(25 * 60);
    setBreakTime(5 * 60);
    setOnBreak(false);
  };
  return (
    <div className="pomodoroClockContainer">
      <div className="flex flex-wrap justify-around items-center">
        <Length
          title="Break Time"
          changeTime={changeTime}
          type="break"
          time={breakTime}
          formatTime={formatTime}
        />
        <Length
          title="Session Time"
          changeTime={changeTime}
          type="session"
          time={sessionTime}
          formatTime={formatTime}
        />
      </div>
      <DisplaySession
        onBreak={onBreak}
        formatTime={formatTime}
        displayTime={displayTime}
        timerOn={timerOn}
        controlTime={controlTime}
        resetTime={resetTime}
      />
    </div>
  );
};

export default PomodoroClock;
