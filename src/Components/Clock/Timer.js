import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

export default function Timer({ time, setIsRunning }) {
  const [timeLocal, setTimeLocal] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLocal((prevTime) => prevTime - 1000);
      if (timeLocal === 1000) {
        console.log("d");
        setIsRunning(false);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLocal]);

  return <div className={styles.Timer}>Timer: {timeLocal}</div>;
}
