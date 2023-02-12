import styles from "./InfoModal.module.css";

export default function ModalContent() {
  return (
    <div data-type="modalContent" className={styles.ModalContent}>
      <h3 data-type="modalContent">How to use the app? It's really simple.</h3>
      <p data-type="modalContent">
        After you customized intervals length to your personal preferences,
        start the timer by clicking the play button.
      </p>
      <p data-type="modalContent">
        When the time of your session passes, you're going to hear an alarm
        sound, and the break timer will start to countdown.
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
