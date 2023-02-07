import styles from "./ChooseLength.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function ChooseLength({
  breakLength,
  sessionLength,
  handleIncreaseBreak,
  handleDecreaseBreak,
  handleIncreaseSession,
  handleDecreaseSession,
}) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ChooseLength}>
        <h2 className={styles.ChooseLengthName}>Break length</h2>
        <div className={styles.ChooseLengthContent}>
          <span>{breakLength / 60}</span>
          <div className={styles.Icons}>
            <FiChevronUp
              onClick={handleIncreaseBreak}
              className={styles.Icon}
              size={35}
            />
            <FiChevronDown
              onClick={handleDecreaseBreak}
              className={styles.Icon}
              size={35}
            />
          </div>
        </div>
      </div>
      <div className={styles.ChooseLength}>
        <h2 className={styles.ChooseLengthName}>Session length</h2>
        <div className={styles.ChooseLengthContent}>
          <span>{sessionLength / 60}</span>
          <div className={styles.Icons}>
            <FiChevronUp
              onClick={handleIncreaseSession}
              className={styles.Icon}
              size={35}
            />
            <FiChevronDown
              onClick={handleDecreaseSession}
              className={styles.Icon}
              size={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
