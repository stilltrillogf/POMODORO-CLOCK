import styles from "./Buttons.module.css";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";
import { BUTTON_ICON_SIZE } from "../Utility/Config";
import {
  TimerIsPausedContext,
  TimerIsRunningContext,
  HandlePlayPauseResetContext,
} from "../Utility/Context";
import { useContext } from "react";

function PlayPause() {
  const handlePlayPauseReset = useContext(HandlePlayPauseResetContext);
  const timerIsRunning = useContext(TimerIsRunningContext);
  const timerIsPaused = useContext(TimerIsPausedContext);

  if (timerIsRunning) {
    if (timerIsPaused) {
      return (
        <FiPlay
          onClick={handlePlayPauseReset}
          data-action="Play"
          className={styles.Icon}
          size={BUTTON_ICON_SIZE}
        />
      );
    } else {
      return (
        <FiPause
          onClick={handlePlayPauseReset}
          data-action="Pause"
          className={styles.Icon}
          size={BUTTON_ICON_SIZE}
        />
      );
    }
  } else {
    return (
      <FiPlay
        onClick={handlePlayPauseReset}
        data-action="Play"
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
    );
  }
}

export default function Buttons() {
  const handlePlayPauseReset = useContext(HandlePlayPauseResetContext);
  return (
    <div className={styles.Container}>
      {PlayPause()}
      <FiRefreshCw
        onClick={handlePlayPauseReset}
        data-action="Reset"
        className={styles.Icon}
        size={BUTTON_ICON_SIZE}
      />
    </div>
  );
}
