"use client";

import styles from "./Cart.module.scss";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = ({ cartItems, setCartItems, amounts, setAmounts }) => {
  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setAmounts((prevAmounts) => {
      const { [productId]: removedAmount, ...newAmounts } = prevAmounts;
      return newAmounts;
    });
  };

  const decreaseAmount = (productId) => {
    if (amounts[productId] > 1) {
      setAmounts((prevAmounts) => ({
        ...prevAmounts,
        [productId]: prevAmounts[productId] - 1,
      }));
    }
  };

  const increaseAmount = (productId) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [productId]: (prevAmounts[productId] || 0) + 1,
    }));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, images, title, price }) => {
            const amount = amounts[id] || 1;
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
                  <p className={styles.list_desc}>Price: {price} $</p>
                  <div className={styles.btn_wrapper}>
                    <button
                      onClick={() => decreaseAmount(id)}
                      className={styles.list_btn}
                    >
                      -
                    </button>
                    <span>{amount}</span>
                    <button
                      onClick={() => increaseAmount(id)}
                      className={styles.list_btn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.list_btn_remove}
                    onClick={() => handleRemove(id)}
                  >
                    remove
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <EmptyCart />
        )}
      </ul>
    </div>
  );
};

export default Cart;
