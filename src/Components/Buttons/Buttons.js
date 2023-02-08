import styles from "./Buttons.module.css";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";
import { BUTTON_ICON_SIZE } from "../Utility/Config";
import {
  TimerIsPausedContext,
  TimerIsRunningContext,
} from "../Utility/Context";
import { useContext } from "react";

function PlayPause(onPlay, onPause) {
  const timerIsRunning = useContext(TimerIsRunningContext);
  const timerIsPaused = useContext(TimerIsPausedContext);

  if (timerIsRunning) {
    if (timerIsPaused) {
      return (
        <FiPlay
          onClick={onPlay}
          className={styles.Icon}
          size={BUTTON_ICON_SIZE}
        />
      );
    } else {
      return (
        <FiPause
          onClick={onPause}
          className={styles.Icon}
          size={BUTTON_ICON_SIZE}
        />
      );
    }
  } else {
    return (
      <FiPlay
        onClick={onPlay}
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
    );
  }
}

export default function Buttons({ onPlay, onPause, onReset }) {
  return (
    <div className={styles.Container}>
      {PlayPause(onPlay, onPause)}
      <FiRefreshCw
        onClick={onReset}
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
    </div>
  );
}
