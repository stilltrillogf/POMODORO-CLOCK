import styles from "./InfoModal.module.css";
import { useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import {
  HandleInfoModalClickContext,
  ModalIsOpenContext,
} from "../Utility/Context";

function Modal() {
  return <div className={styles.Modal}>MODAL WINDOW</div>;
}

export default function InfoModal() {
  const handleInfoModalClick = useContext(HandleInfoModalClickContext);
  const modalIsOpen = useContext(ModalIsOpenContext);
  return (
    <>
      <div className={styles.InfoIcon}>
        <BsInfoCircle onClick={handleInfoModalClick} size={25} />
      </div>
      {modalIsOpen && <Modal />}
    </>
  );
}
