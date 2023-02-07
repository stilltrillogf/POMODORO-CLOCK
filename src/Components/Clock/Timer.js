import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

export default function Timer({ time, setIsRunning, type, setCurrentType }) {
  const { sessionLength, breakLength } = time;
  const [timeLocal, setTimeLocal] = useState(
    type === "Session" ? sessionLength : breakLength
  );

  const timeFormatted = new Date(1000 * timeLocal)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLocal((prevTime) => prevTime - 1);
      if (timeLocal === 0) {
        // TODO: Here play alarm sound
        console.log(`${type === "Session" ? "Break time" : "Session time"}`);
        setCurrentType(type === "Session" ? "Break" : "Session");
        setTimeLocal(type === "Session" ? breakLength : sessionLength);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLocal, setCurrentType, type, breakLength, sessionLength]);

  return <div className={styles.Timer}>{timeFormatted}</div>;
}
