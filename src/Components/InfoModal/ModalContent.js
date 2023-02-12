import { useState } from "react";
import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";
import styles from "./InfoModal.module.css";

export default function ModalContent() {
  const [previewIsVisible, setPreviewIsVisible] = useState({
    play: false,
    pause: false,
    refresh: false,
  });

  function handleIconMouseEnter(e) {
    if (e.target.dataset.icon === "play") {
      setPreviewIsVisible({ ...previewIsVisible, play: true });
    }
    if (e.target.dataset.icon === "pause") {
      setPreviewIsVisible({ ...previewIsVisible, pause: true });
    }
    if (e.target.dataset.icon === "refresh") {
      setPreviewIsVisible({ ...previewIsVisible, refresh: true });
    }
  }
  function handleIconMouseOut() {
    setPreviewIsVisible({ play: false, pause: false, refresh: false });
  }

  return (
    <div data-type="modalContent" className={styles.ModalContent}>
      <h3 data-type="modalContent">How to use the app? It's really simple.</h3>
      <p data-type="modalContent">
        After you customized intervals length to your personal preferences,
        start the timer by clicking the{" "}
        <b
          className={styles.iconHoverParent}
          onMouseEnter={handleIconMouseEnter}
          onMouseOut={handleIconMouseOut}
          data-type="modalContent"
          data-icon="play"
        >
          {previewIsVisible.play && (
            <FiPlay className={styles.iconHover} size={25} />
          )}
          play
        </b>{" "}
        icon.
      </p>
      <p data-type="modalContent">
        When the time of your session passes, you're going to hear an alarm
        sound, and the break timer will start to countdown.
      </p>
      <p>
        You can stop the timer any time by clicking{" "}
        <b
          className={styles.iconHoverParent}
          onMouseEnter={handleIconMouseEnter}
          onMouseOut={handleIconMouseOut}
          data-type="modalContent"
          data-icon="pause"
        >
          {previewIsVisible.pause && (
            <FiPause className={styles.iconHover} size={25} />
          )}
          pause
        </b>{" "}
        icon that appears when the timer is running.
      </p>
      <p>In order to change interval length again, you must reset the app.</p>
      <p>
        To reset the app, click the{" "}
        <b
          className={styles.iconHoverParent}
          onMouseEnter={handleIconMouseEnter}
          onMouseOut={handleIconMouseOut}
          data-type="modalContent"
          data-icon="refresh"
        >
          {previewIsVisible.refresh && (
            <FiRefreshCw className={styles.iconHover} size={25} />
          )}
          refresh
        </b>{" "}
        icon.
      </p>
      <h3 data-type="modalContent">Pomodoro technique</h3>
      <p data-type="modalContent">
        The Pomodoro Technique is a time management method. It uses a timer to
        break work into intervals, typically 25 minutes in length, separated by
        short 5 minute breaks.
      </p>
      <p data-type="modalContent">
        You can find more information on the dedicated{" "}
        <a
          data-type="modalContent"
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        >
          wikipedia page
        </a>
        .
      </p>
    </div>
  );
}
