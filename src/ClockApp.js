import { useState } from "react";
import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";
import {
  BreakLengthContext,
  SessionLengthContext,
  CurrentTypeContext,
  TimerIsRunningContext,
  TimerIsPausedContext,
  SetCurrentTypeContext,
  HandleChangeLengthContext,
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

  const handleTimerPlay = function () {
    setTimerIsRunning(true);
  };
  const handleTimerPause = function () {
    setTimerIsPaused(!timerIsPaused);
  };
  const handleTimerReset = function () {
    setTimerIsRunning(false);
    setCurrentType(DEFAULT_CURRENT_TYPE);
  };

  return (
    <BreakLengthContext.Provider value={breakLength}>
      <SessionLengthContext.Provider value={sessionLength}>
        <HandleChangeLengthContext.Provider value={handleChangeLength}>
          <CurrentTypeContext.Provider value={currentType}>
            <SetCurrentTypeContext.Provider value={setCurrentType}>
              <TimerIsRunningContext.Provider value={timerIsRunning}>
                <TimerIsPausedContext.Provider value={timerIsPaused}>
                  <div className={styles.ClockApp}>
                    <h1 className={styles.Title}>POMODORO CLOCK</h1>
                    <ChooseLength />
                    <Clock />
                    <Buttons
                      onPlay={handleTimerPlay}
                      onPause={handleTimerPause}
                      onReset={handleTimerReset}
                    />
                  </div>
                </TimerIsPausedContext.Provider>
              </TimerIsRunningContext.Provider>
            </SetCurrentTypeContext.Provider>
          </CurrentTypeContext.Provider>
        </HandleChangeLengthContext.Provider>
      </SessionLengthContext.Provider>
    </BreakLengthContext.Provider>
  );
}

export default ClockApp;
