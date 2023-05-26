"use client";

import { useState, useEffect } from "react";
import styles from "./ShoppingCart.module.scss";
import Form from "../Form/Form";
import Cart from "../Сart/Cart";
import Cookies from 'js-cookie';

const ShoppingCart = () => {
    const [amounts, setAmounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      const savedCartItems = Cookies.get('cartItems');
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }, []);

    useEffect(() => {
      Cookies.set('cartItems', JSON.stringify(cartItems));
      const total = cartItems.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'number' ? item.price : 0;
        const itemAmount = typeof amounts[item.id] === 'number' ? amounts[item.id] : 1;
        return accumulator + itemPrice * itemAmount;
      }, 0);
      setTotalPrice(total);
    }, [cartItems, amounts]);

  return (
    <div className={styles.wrapper}>
      <Form
        totalPrice={totalPrice}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div>
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          amounts={amounts}
          setAmounts={setAmounts}
        />
        {totalPrice > 0 && (
          <p className={styles.total}>
            Total price:
            {totalPrice} $
          </p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
