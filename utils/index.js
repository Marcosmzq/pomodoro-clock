export const playAudio = () => {
  const audio = new Audio("/audio/beep.mp3");
  audio.currentTime = 0;
  audio.play();
};

export const formatTime = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  return (
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
};
