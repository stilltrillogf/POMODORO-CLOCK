import styles from "./ChooseLength.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function ChooseLength() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ChooseLength}>
        <h2 className={styles.ChooseLengthName}>Break length</h2>
        <div className={styles.ChooseLengthContent}>
          <span>5</span>
          <div className={styles.Icons}>
            <FiChevronUp className={styles.Icon} size={35} />
            <FiChevronDown className={styles.Icon} size={35} />
          </div>
        </div>
      </div>
      <div className={styles.ChooseLength}>
        <h2 className={styles.ChooseLengthName}>Session length</h2>
        <div className={styles.ChooseLengthContent}>
          <span>25</span>
          <div className={styles.Icons}>
            <FiChevronUp className={styles.Icon} size={35} />
            <FiChevronDown className={styles.Icon} size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
