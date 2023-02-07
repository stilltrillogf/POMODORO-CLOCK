import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";
import { useState } from "react";

function ClockApp() {
  // Length in miliseconds
  const [breakLength, setBreakLength] = useState(10000);
  const [sessionLength, setSessionLength] = useState(10000);
  const [currentType, setCurrentType] = useState("Session");
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  // TODO: refactor into context+reducer
  const handleIncreaseBreak = () => {
    setBreakLength(breakLength + 1000);
  };
  const handleDecreaseBreak = () => {
    if (breakLength === 1) return;
    setBreakLength(breakLength - 1000);
  };
  const handleIncreaseSession = () => {
    setSessionLength(sessionLength + 1000);
  };
  const handleDecreaseSession = () => {
    if (sessionLength === 1) return;
    setSessionLength(sessionLength - 1000);
  };

  const handleTimerPlay = function () {
    setTimerIsRunning(true);
  };

  const handleTimerPause = function () {
    setTimerIsRunning(false);
  };
  const handleTimerReset = function () {};

  return (
    <div className={styles.ClockApp}>
      <h1 className={styles.Title}>POMODORO CLOCK</h1>
      <ChooseLength
        handleIncreaseBreak={handleIncreaseBreak}
        handleDecreaseBreak={handleDecreaseBreak}
        handleIncreaseSession={handleIncreaseSession}
        handleDecreaseSession={handleDecreaseSession}
        breakLength={breakLength}
        sessionLength={sessionLength}
      />
      <Clock
        type={currentType}
        time={currentType === "Session" ? sessionLength : breakLength}
        isRunning={timerIsRunning}
        setIsRunning={setTimerIsRunning}
      />
      <Buttons
        onPlay={handleTimerPlay}
        onPause={handleTimerPause}
        onReset={handleTimerReset}
      />
    </div>
  );
}

export default ClockApp;
