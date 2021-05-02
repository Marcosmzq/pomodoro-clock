const Length = ({ title, changeTime, time, type, formatTime }) => {
  return (
    <div className="lengthContainer">
      <h3 className="title">{title}</h3>
      <div className="lengthBtnContainer">
        <button onClick={() => changeTime(-60, type)} className="btn">
          -
        </button>
        <p className="displayTime">{formatTime(time)}</p>
        <button onClick={() => changeTime(60, type)} className="btn">
          +
        </button>
      </div>
    </div>
  );
};

export default Length;
