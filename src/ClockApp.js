import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";
import { useState } from "react";
import {
  BreakLengthContext,
  SessionLengthContext,
  CurrentTypeContext,
  TimerIsRunningContext,
  TimerIsPausedContext,
  SetCurrentTypeContext,
} from "./Components/Context/Context";

function ClockApp() {
  // Length in seconds
  const [breakLength, setBreakLength] = useState(60);
  const [sessionLength, setSessionLength] = useState(300);
  const [currentType, setCurrentType] = useState("Session");
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerIsPaused, setTimerIsPaused] = useState(false);

  // TODO: refactor into context+reducer
  const handleIncreaseBreak = () => {
    if (timerIsRunning) return;
    setBreakLength(breakLength + 60);
  };
  const handleDecreaseBreak = () => {
    if (timerIsRunning) return;
    if (breakLength / 60 === 1) return;
    setBreakLength(breakLength - 60);
  };
  const handleIncreaseSession = () => {
    if (timerIsRunning) return;
    setSessionLength(sessionLength + 60);
  };
  const handleDecreaseSession = () => {
    if (timerIsRunning) return;
    if (sessionLength / 60 === 1) return;
    setSessionLength(sessionLength - 60);
  };

  const handleTimerPlay = function () {
    setTimerIsRunning(true);
  };
  const handleTimerPause = function () {
    setTimerIsPaused(!timerIsPaused);
  };
  const handleTimerReset = function () {
    setTimerIsRunning(false);
    setCurrentType("Session");
  };

  return (
    <BreakLengthContext.Provider value={breakLength}>
      <SessionLengthContext.Provider value={sessionLength}>
        <CurrentTypeContext.Provider value={currentType}>
          <TimerIsRunningContext.Provider value={timerIsRunning}>
            <TimerIsPausedContext.Provider value={timerIsPaused}>
              <SetCurrentTypeContext.Provider value={setCurrentType}>
                <div className={styles.ClockApp}>
                  <h1 className={styles.Title}>POMODORO CLOCK</h1>
                  <ChooseLength
                    handleIncreaseBreak={handleIncreaseBreak}
                    handleDecreaseBreak={handleDecreaseBreak}
                    handleIncreaseSession={handleIncreaseSession}
                    handleDecreaseSession={handleDecreaseSession}
                  />
                  <Clock />
                  <Buttons
                    onPlay={handleTimerPlay}
                    onPause={handleTimerPause}
                    onReset={handleTimerReset}
                  />
                </div>
              </SetCurrentTypeContext.Provider>
            </TimerIsPausedContext.Provider>
          </TimerIsRunningContext.Provider>
        </CurrentTypeContext.Provider>
      </SessionLengthContext.Provider>
    </BreakLengthContext.Provider>
  );
}

export default ClockApp;
