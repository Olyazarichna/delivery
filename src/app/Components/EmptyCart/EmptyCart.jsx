import styles from "./EmptyCart.module.scss";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#bbb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 3h2.5l2 14H17a2 2 0 1 1-2 2M9 5h12l-2 6m-1 3H6m5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </svg>
      <h2>Your cart is empty.</h2>
      <div className={styles.text}>
        <p>Looks like you have not added anything to you cart. Go ahead</p>
        <Link href="/" className={styles.text_link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="34"
            fill="none"
          >
            <path
              fill="#fff"
              d="M7 25.9c-.7-.8-1.3-2.3-2.5-4.2l-3.2-3.9c-.4-.8-.4-1.2-.2-2 .2-1.3 1.5-2.3 3-2.3 1 0 2 .8 2.8 1.4.5.4 1 1.2 1.5 1.7l.8 1c.4.6.6 1 .4.2-.2-1-.4-2.7-.8-4.3-.2-1.3-.4-1.5-.6-2.3l-.6-2.7c-.2-.6-.4-2.3-.7-3.1-.2-1-.2-3 .7-3.8.6-.6 1.8-.8 2.7-.4 1 .6 1.6 2 1.8 2.7a73 73 0 0 1 2 10c.1-.9-.1-2.3.1-3.1.2-.7.6-1.5 1.5-1.7.6-.2 1.2-.2 1.8-.2.6.2 1.3.6 1.7 1 .8 1.3.8 4 .8 3.8.2-.9.2-2.5.6-3.4.2-.4 1-.8 1.5-1 .6-.2 1.4-.2 2 0 .5 0 1.3.6 1.5 1 .4.7.6 2.7.8 3.6 0 .2.2-.9.7-1.5.8-1.2 3.7-1.6 3.9 1.3v4.7l-.4 3.6c-.2.6-.8 2-1.5 2.9 0 0-2.2 2.4-2.5 3.7l-.2 2 .2 2h-2.4c-.9-.3-2-1.7-2.1-2.4-.4-.6-1-.6-1.5 0-.4.9-1.4 2.3-2.3 2.3-1.4.2-4.3 0-6.4 0 0 0 .4-2-.4-2.9l-2.3-2.3L7 26Z"
            />
            <path
              stroke="#23242A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 25.9c-.7-.8-1.3-2.3-2.5-4.2l-3.2-3.9c-.4-.8-.4-1.2-.2-2 .2-1.3 1.5-2.3 3-2.3 1 0 2 .8 2.8 1.4.5.4 1 1.2 1.5 1.7l.8 1c.4.6.6 1 .4.2-.2-1-.4-2.7-.8-4.3-.2-1.3-.4-1.5-.6-2.3l-.6-2.7c-.2-.6-.4-2.3-.7-3.1-.2-1-.2-3 .7-3.8.6-.6 1.8-.8 2.7-.4 1 .6 1.6 2 1.8 2.7a73 73 0 0 1 2 10c.1-.9-.1-2.3.1-3.1.2-.7.6-1.5 1.5-1.7.6-.2 1.2-.2 1.8-.2.6.2 1.3.6 1.7 1 .8 1.3.8 4 .8 3.8.2-.9.2-2.5.6-3.4.2-.4 1-.8 1.5-1 .6-.2 1.4-.2 2 0 .5 0 1.3.6 1.5 1 .4.7.6 2.7.8 3.6 0 .2.2-.9.7-1.5.8-1.2 3.7-1.6 3.9 1.3v4.7l-.4 3.6c-.2.6-.8 2-1.5 2.9 0 0-2.2 2.4-2.5 3.7l-.2 2 .2 2h-2.4c-.9-.3-2-1.7-2.1-2.4-.4-.6-1-.6-1.5 0-.4.9-1.4 2.3-2.3 2.3-1.4.2-4.3 0-6.4 0 0 0 .4-2-.4-2.9l-2.3-2.3L7 26Z"
            />
            <path
              stroke="#23242A"
              strokeLinecap="round"
              strokeWidth="2"
              d="M23.8 26.7v-7"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
              d="m19.9 26.7-.2-7"
            />
            <path
              stroke="#23242A"
              strokeLinecap="round"
              strokeWidth="2"
              d="M15.5 19.7v7"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
