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
  const timeFormatted = new Date(
    1000 * (type === "Session" ? sessionLength : breakLength)
  )
    .toISOString()
    .substring(14, 19);
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
          <div className={styles.Timer}>{timeFormatted}</div>
        )}
      </div>
    </div>
  );
}
