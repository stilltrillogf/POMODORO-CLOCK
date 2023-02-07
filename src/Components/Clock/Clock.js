import styles from "./Clock.module.css";
import Timer from "./Timer";

export default function Clock({ type, time, isRunning, setIsRunning }) {
  return (
    <div className={styles.ClockBorder}>
      <div className={styles.Clock}>
        <h2 className={styles.Title}>{type}</h2>
        {isRunning ? (
          <Timer time={time} setIsRunning={setIsRunning} />
        ) : (
          <div className={styles.Timer}>{time}</div>
        )}
      </div>
    </div>
  );
}
