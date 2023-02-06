import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";
import { useState } from "react";

function ClockApp() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  // TODO: refactor into context+reducer
  const handleIncreaseBreak = () => {
    setBreakLength(breakLength + 1);
  };
  const handleDecreaseBreak = () => {
    setBreakLength(breakLength - 1);
  };
  const handleIncreaseSession = () => {
    setSessionLength(sessionLength + 1);
  };
  const handleDecreaseSession = () => {
    setSessionLength(sessionLength - 1);
  };

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
      <Clock />
      <Buttons />
    </div>
  );
}

export default ClockApp;
