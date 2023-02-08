import { useContext } from "react";
import styles from "./ChooseLength.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BreakLengthContext, SessionLengthContext } from "../Utility/Context";
import { CHOOSE_LENGTH_ICON_SIZE } from "../Utility/Config";

export default function ChooseLength({
  handleIncreaseBreak,
  handleDecreaseBreak,
  handleIncreaseSession,
  handleDecreaseSession,
}) {
  const breakLength = useContext(BreakLengthContext);
  const sessionLength = useContext(SessionLengthContext);
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
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
            <FiChevronDown
              onClick={handleDecreaseBreak}
              className={styles.Icon}
              size={CHOOSE_LENGTH_ICON_SIZE}
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
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
            <FiChevronDown
              onClick={handleDecreaseSession}
              className={styles.Icon}
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
