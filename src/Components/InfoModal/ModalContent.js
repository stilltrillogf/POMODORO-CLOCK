import styles from "./InfoModal.module.css";

export default function ModalContent() {
  return (
    <div data-type="modalContent" className={styles.ModalContent}>
      <h3 data-type="modalContent">How to use the app? It's really simple.</h3>
      <p data-type="modalContent">
        After you customized intervals length to your personal preferences,
        start the timer by clicking the <b data-type="modalContent">play</b>{" "}
        icon.
      </p>
      <p data-type="modalContent">
        When the time of your session passes, you're going to hear an alarm
        sound, and the break timer will start to countdown.
      </p>
      <p>
        You can stop the timer any time by clicking{" "}
        <b data-type="modalContent">pause</b> icon that appears when the timer
        is running.
      </p>
      <p>In order to change interval length again, you must reset the app.</p>
      <p>
        To reset the app, click the <b data-type="modalContent">refresh</b>{" "}
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
      </p>
    </div>
  );
}
