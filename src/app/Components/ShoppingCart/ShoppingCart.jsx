"use client";

import { useState } from "react";
import styles from "./ShoppingCart.module.scss";
import Form from "../Form/Form";
import Cart from "../Сart/Cart";

const ShoppingCart = () => {

  return (
    <div className={styles.wrapper}>
      <Form />
      <Cart />
    </div>
  );
};

export default ShoppingCart;
