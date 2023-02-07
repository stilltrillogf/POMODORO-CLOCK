import styles from "./Buttons.module.css";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";

export default function Buttons({ onPlay, onPause, onReset }) {
  return (
    <div className={styles.Container}>
      <FiPlay onClick={onPlay} className={styles.Icon} size={40} />
      <FiPause onClick={onPause} className={styles.Icon} size={40} />
      <FiRefreshCw onClick={onReset} className={styles.Icon} size={40} />
    </div>
  );
}
