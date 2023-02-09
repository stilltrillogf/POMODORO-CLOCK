import { useState } from "react";
import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";
import Compose, {
  BreakLengthContext,
  SessionLengthContext,
  CurrentTypeContext,
  TimerIsRunningContext,
  TimerIsPausedContext,
  SetCurrentTypeContext,
  HandleChangeLengthContext,
  HandlePlayPauseResetContext,
} from "./Components/Utility/Context";
import {
  DEFAULT_BREAK_LENGTH,
  DEFAULT_SESSION_LENGTH,
  DEFAULT_CURRENT_TYPE,
} from "./Components/Utility/Config";

function ClockApp() {
  // Length in seconds
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);
  const [currentType, setCurrentType] = useState(DEFAULT_CURRENT_TYPE);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerIsPaused, setTimerIsPaused] = useState(false);

  const handleChangeLength = (e) => {
    if (timerIsRunning) return;
    const type = e.target.closest("div").dataset.id;
    const action = e.target.closest("svg").dataset.action;

    if (type === "Session") {
      if (action === "Increase") {
        setSessionLength(sessionLength + 60);
      } else {
        if (sessionLength / 60 === 1) return;
        setSessionLength(sessionLength - 60);
      }
    } else {
      if (action === "Increase") {
        setBreakLength(breakLength + 60);
      } else {
        if (breakLength / 60 === 1) return;
        setBreakLength(breakLength - 60);
      }
    }
  };

  const handlePlayPauseReset = (e) => {
    const action = e.target.closest("svg").dataset.action;
    if (action === "Play") {
      if (timerIsPaused) setTimerIsPaused(false);
      setTimerIsRunning(true);
    }
    if (action === "Pause") {
      setTimerIsPaused(!timerIsPaused);
    }
    if (action === "Reset") {
      setTimerIsRunning(false);
      setCurrentType(DEFAULT_CURRENT_TYPE);
    }
  };

  return (
    <Compose
      items={[
        [BreakLengthContext, { value: breakLength }],
        [SessionLengthContext, { value: sessionLength }],
        [HandleChangeLengthContext, { value: handleChangeLength }],
        [HandlePlayPauseResetContext, { value: handlePlayPauseReset }],
        [CurrentTypeContext, { value: currentType }],
        [SetCurrentTypeContext, { value: setCurrentType }],
        [TimerIsRunningContext, { value: timerIsRunning }],
        [TimerIsPausedContext, { value: timerIsPaused }],
      ]}
    >
      <div className={styles.ClockApp}>
        <h1 className={styles.Title}>POMODORO CLOCK</h1>
        <ChooseLength />
        <Clock />
        <Buttons />
      </div>
    </Compose>
  );
}

export default ClockApp;
