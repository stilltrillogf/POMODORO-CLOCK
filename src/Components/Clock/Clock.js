import styles from "./Clock.module.css";
import Timer from "./Timer";

export default function Clock({
  type,
  setCurrentType,
  time,
  isRunning,
  setIsRunning,
}) {
  const { sessionLength, breakLength } = time;
  return (
    <div className={styles.ClockBorder}>
      <div className={styles.Clock}>
        <h2 className={styles.Title}>{type}</h2>
        {isRunning ? (
          <Timer
            type={type}
            setCurrentType={setCurrentType}
            time={time}
            setIsRunning={setIsRunning}
          />
        ) : (
          <div className={styles.Timer}>
            {type === "Session" ? sessionLength : breakLength}
          </div>
        )}
      </div>
    </div>
  );
}
