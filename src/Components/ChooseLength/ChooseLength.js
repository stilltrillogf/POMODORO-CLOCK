import { useContext } from "react";
import styles from "./ChooseLength.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  BreakLengthContext,
  SessionLengthContext,
  HandleChangeLengthContext,
} from "../Utility/Context";
import { CHOOSE_LENGTH_ICON_SIZE } from "../Utility/Config";

function ChooseLengthSingle({ type, length }) {
  const handleChangeLength = useContext(HandleChangeLengthContext);

  return (
    <div className={styles.ChooseLength}>
      <h2 className={styles.ChooseLengthName}>{type} length</h2>
      <div className={styles.ChooseLengthContent}>
        <span>{length / 60}</span>
        <div data-id={type} className={`${styles.Icons}`}>
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
  );
}

export default function ChooseLength() {
  const breakLength = useContext(BreakLengthContext);
  const sessionLength = useContext(SessionLengthContext);
  return (
    <div className={styles.Wrapper}>
      <ChooseLengthSingle type="Break" length={breakLength} />
      <ChooseLengthSingle type="Session" length={sessionLength} />
    </div>
  );
}
