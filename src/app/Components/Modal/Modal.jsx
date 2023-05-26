import styles from "./Modal.module.scss";

const Modal = ({ onClose }) => {
    return(
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <p className={styles.text}>Thank you!</p>
      <p className={styles.text}>Your order has been received.</p>
      <button className={styles.btn} onClick={onClose}>
        <svg className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
          />
        </svg>
      </button>
    </div>
  </div>);
};

export default Modal;
