import styles from "./InfoModal.module.css";
import { useContext, useEffect, useCallback } from "react";
import { BsInfoCircle } from "react-icons/bs";
import {
  HandleInfoModalClickContext,
  SetModalIsOpenContext,
  ModalIsOpenContext,
} from "../Utility/Context";
import ModalContent from "./ModalContent";

function Modal() {
  const setModalIsOpen = useContext(SetModalIsOpenContext);

  const handleModalClose = useCallback(
    (e) => {
      if (e.target.dataset.type === "closeModal") {
        setModalIsOpen(false);
      }
      // Close modal when clicked outside of it
      if (!e.target.dataset.type) {
        setModalIsOpen(false);
      }
    },
    [setModalIsOpen]
  );

  useEffect(() => {
    window.addEventListener("click", handleModalClose);

    return () => {
      window.removeEventListener("click", handleModalClose);
    };
  }, [handleModalClose]);

  return (
    <div data-type="modal" className={styles.Modal}>
      <div data-type="closeModal" className={styles.closeBtn}>
        X
      </div>
      <ModalContent />
    </div>
  );
}

export default function InfoModal() {
  const handleInfoModalClick = useContext(HandleInfoModalClickContext);
  const modalIsOpen = useContext(ModalIsOpenContext);

  return (
    <>
      <div data-type="infoModal" className={styles.InfoIcon}>
        <BsInfoCircle
          data-type="infoModal"
          onClick={handleInfoModalClick}
          size={25}
        />
      </div>
      {modalIsOpen && <Modal />}
    </>
  );
}
