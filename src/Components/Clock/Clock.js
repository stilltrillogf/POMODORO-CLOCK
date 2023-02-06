import styles from "./Clock.module.css";

export default function Clock() {
  return (
    <div className={styles.ClockBorder}>
      <div className={styles.Clock}>
        <h2 className={styles.Title}>Break/Session</h2>
        <div className={styles.Timer}>25:00</div>
      </div>
    </div>
  );
}
