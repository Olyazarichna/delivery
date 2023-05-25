"use client";
import { useState, useEffect } from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleToggle = (productId) => {
    const isInCart = cartItems.some((item) => item.id === productId);

    if (isInCart) {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
    } else {
      const selectedItem = products.find((item) => item.id === productId);
      setCartItems([...cartItems, selectedItem]);
    }
  };
  return (
    <ul className={styles.list}>
      {products &&
        products.map(
          ({ id, images, brand, title, description, price, rating }) => {
            const isInCart = cartItems.some((item) => item.id === id);
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

                <p className={styles.list_desc}>Brand: {brand}</p>
                <p className={styles.list_desc}>Title: {title}</p>
                <p className={styles.list_desc}>Description: {description}</p>
                <p className={styles.list_desc}>Price: {price} $</p>
                <p className={styles.list_desc}>Rating: {rating}</p>

                <button
                  type="button"
                  className={styles.list_btn}
                  onClick={() => handleToggle(id)}
                >
                  {!isInCart ? "add to Cart" : "remove"}
                </button>
              </li>
            );
          }
        )}
    </ul>
  );
};

export default ProductList;
