"use client";
import { useState } from "react";
import styles from "./Cart.module.scss";

import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const savedCartItems = localStorage.getItem("cartItems");
  const cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, images, title, price }) => {
            return (
              <li key={id} className={styles.list_item}>
                <div className={styles.img_wrapper}>
                  <img
                    src={images[0] || images[1]}
                    alt="product"
                    width={300}
                    height="auto"
                    loading="lazy"
                  />
                </div>
                <div className={styles.text_wrapper}>
                  <p className={styles.list_desc}>Title: {title}</p>
                  <p className={styles.list_desc}>Price: {price}</p>
                  <div className={styles.btn_wrapper}>
                    <button
                      onClick={decreaseAmount}
                      className={styles.list_btn}
                    >
                      -
                    </button>
                    <span>{amount}</span>
                    <button
                      onClick={increaseAmount}
                      className={styles.list_btn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.list_btn}
                    // onClick={() => handleToggle(id)}
                  >
                    remove
                  </button>
                </div>
              </li>
             
            );
          })
        ) : (
            <EmptyCart/>
        )}
         <p>Total:{totalPrice}</p>
      </ul>
    </div>
  );
};

export default Cart;
