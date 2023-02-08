import styles from "./Clock.module.css";
import { useState, useEffect, useContext } from "react";
import {
  BreakLengthContext,
  SessionLengthContext,
  CurrentTypeContext,
  TimerIsPausedContext,
  SetCurrentTypeContext,
} from "../Utility/Context";
import { FINAL_COUNTDOWN_TIME, AUDIO_URL } from "../Utility/Config";

export default function Timer() {
  const breakLength = useContext(BreakLengthContext);
  const sessionLength = useContext(SessionLengthContext);
  const currentType = useContext(CurrentTypeContext);
  const timerIsPaused = useContext(TimerIsPausedContext);
  const setCurrentType = useContext(SetCurrentTypeContext);

  const [timeLocal, setTimeLocal] = useState(
    currentType === "Session" ? sessionLength : breakLength
  );
  const [timerClass, setTimerClass] = useState(styles.Timer);
  const alarm = new Audio(AUDIO_URL);

  const timeFormatted = new Date(1000 * timeLocal)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!timerIsPaused) {
        setTimeLocal((prevTime) => {
          return prevTime - 1;
        });
      }

      // When countdown reaches 30 seconds
      if (timeLocal === FINAL_COUNTDOWN_TIME) {
        setTimerClass(`${styles.Timer} ${styles.TimerRed}`);
      }

      // When countdown finishes
      if (timeLocal === 0) {
        alarm.play();
        setCurrentType(currentType === "Session" ? "Break" : "Session");
        setTimeLocal(currentType === "Session" ? breakLength : sessionLength);
        setTimerClass(styles.Timer);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [
    timeLocal,
    setCurrentType,
    currentType,
    breakLength,
    sessionLength,
    timerIsPaused,
  ]);

  return <div className={timerClass}>{timeFormatted}</div>;
}
