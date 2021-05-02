const DisplaySession = ({
  displayTime,
  formatTime,
  onBreak,
  controlTime,
  timerOn,
  resetTime,
}) => {
  return (
    <div className="displaySessionContainer">
      <h3 className="title">{onBreak ? "Break time" : "Session time"}</h3>
      <p className="displayTime">{formatTime(displayTime)}</p>
      <div>
        <button className="btn" onClick={controlTime}>
          {timerOn ? "Pause" : "Play"}
        </button>
        <button className="btn" onClick={resetTime}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default DisplaySession;
