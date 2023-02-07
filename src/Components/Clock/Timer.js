import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

export default function Timer({ time, setIsRunning, type, setCurrentType }) {
  const { sessionLength, breakLength } = time;
  const [timeLocal, setTimeLocal] = useState(
    type === "Session" ? sessionLength : breakLength
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLocal((prevTime) => prevTime - 1000);
      if (timeLocal === 1000) {
        console.log("d");
        setCurrentType(type === "Session" ? "Break" : "Session");
        setTimeLocal(type === "Session" ? breakLength : sessionLength);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLocal, setCurrentType, type]);

  return <div className={styles.Timer}>Timer: {timeLocal}</div>;
}
