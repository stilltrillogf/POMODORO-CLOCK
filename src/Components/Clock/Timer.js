import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

export default function Timer({ time, setIsRunning, type, setCurrentType }) {
  const { sessionLength, breakLength } = time;
  const [timeLocal, setTimeLocal] = useState(
    type === "Session" ? sessionLength : breakLength
  );
  const [timerClass, setTimerClass] = useState(styles.Timer);
  const alarm = new Audio(
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  );

  const timeFormatted = new Date(1000 * timeLocal)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLocal((prevTime) => prevTime - 1);

      // When countdown reaches 30 seconds
      if (timeLocal === 30) {
        setTimerClass(`${styles.Timer} ${styles.TimerRed}`);
      }

      // When countdown finishes
      if (timeLocal === 0) {
        // TODO: Here play alarm sound
        alarm.play();
        setCurrentType(type === "Session" ? "Break" : "Session");
        setTimeLocal(type === "Session" ? breakLength : sessionLength);
        setTimerClass(styles.Timer);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLocal, setCurrentType, type, breakLength, sessionLength, alarm]);

  return <div className={timerClass}>{timeFormatted}</div>;
}
