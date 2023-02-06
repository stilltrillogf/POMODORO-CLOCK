import styles from "./ClockApp.module.css";
import Clock from "./Components/Clock/Clock";
import ChooseLength from "./Components/ChooseLength/ChooseLength";
import Buttons from "./Components/Buttons/Buttons";

function ClockApp() {
  return (
    <div className={styles.ClockApp}>
      <h1 className={styles.Title}>POMODORO CLOCK</h1>
      <ChooseLength />
      <Clock />
      <Buttons />
    </div>
  );
}

export default ClockApp;
