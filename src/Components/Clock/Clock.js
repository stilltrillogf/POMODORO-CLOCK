import { useContext } from "react";
import {
  CurrentTypeContext,
  TimerIsRunningContext,
  SessionLengthContext,
  BreakLengthContext,
} from "../Context/Context";
import styles from "./Clock.module.css";
import Timer from "./Timer";

export default function Clock() {
  const breakLength = useContext(BreakLengthContext);
  const sessionLength = useContext(SessionLengthContext);
  const timerIsRunning = useContext(TimerIsRunningContext);
  const currentType = useContext(CurrentTypeContext);

  const timeFormatted = new Date(
    1000 * (currentType === "Session" ? sessionLength : breakLength)
  )
    .toISOString()
    .substring(14, 19);
  return (
    <div className={styles.Clock}>
      <h2 className={styles.Title}>{currentType}</h2>
      {timerIsRunning ? (
        <Timer />
      ) : (
        <div className={styles.Timer}>{timeFormatted}</div>
      )}
    </div>
  );
}
