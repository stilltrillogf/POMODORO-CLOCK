import { useContext } from "react";
import styles from "./ChooseLength.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  BreakLengthContext,
  SessionLengthContext,
  HandleChangeLengthContext,
} from "../Utility/Context";
import { CHOOSE_LENGTH_ICON_SIZE } from "../Utility/Config";

export default function ChooseLength() {
  const breakLength = useContext(BreakLengthContext);
  const sessionLength = useContext(SessionLengthContext);
  const handleChangeLength = useContext(HandleChangeLengthContext);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ChooseLength}>
        <h2 className={styles.ChooseLengthName}>Break length</h2>
        <div className={styles.ChooseLengthContent}>
          <span>{breakLength / 60}</span>
          <div data-id="Break" className={`${styles.Icons}`}>
            <FiChevronUp
              onClick={handleChangeLength}
              data-action="Increase"
              className={styles.Icon}
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
            <FiChevronDown
              onClick={handleChangeLength}
              data-action="Decrease"
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
          <div data-id="Session" className={styles.Icons}>
            <FiChevronUp
              onClick={handleChangeLength}
              data-action="Increase"
              className={styles.Icon}
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
            <FiChevronDown
              onClick={handleChangeLength}
              data-action="Decrease"
              className={styles.Icon}
              size={CHOOSE_LENGTH_ICON_SIZE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
