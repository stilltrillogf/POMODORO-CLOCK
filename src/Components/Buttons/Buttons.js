import styles from "./Buttons.module.css";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";
import { BUTTON_ICON_SIZE } from "../Utility/Config";

export default function Buttons({ onPlay, onPause, onReset }) {
  return (
    <div className={styles.Container}>
      <FiPlay
        onClick={onPlay}
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
      <FiPause
        onClick={onPause}
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
      <FiRefreshCw
        onClick={onReset}
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
    </div>
  );
}
