import styles from "./Buttons.module.css";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";

export default function Buttons() {
  return (
    <div className={styles.Container}>
      <FiPlay className={styles.Icon} size={40} />
      <FiPause className={styles.Icon} size={40} />
      <FiRefreshCw className={styles.Icon} size={40} />
    </div>
  );
}
