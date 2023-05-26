"use client";

import { useState, useEffect } from "react";
import styles from "./Shops.module.scss";
import Link from "next/link";
import ProductList from "../ProductList/ProductList";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    getShops();
    handleClick("smartphones");
  }, []);

  const getShops = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setShops(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClick = async (shop) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${shop}`
      );
      const data = await response.json();
      setProducts(data);
      setSelectedShop(shop);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.nav}>
        <h2 className={styles.nav_title}>Shops</h2>
        <ul className={styles.nav_list}>
          {shops ? (
            shops.map((shop, id) => (
              <li className={styles.nav_listItem} key={id}>
                <Link
                  href="/"
                  onClick={() => handleClick(shop)}
                  className={`${styles.nav_link} ${
                    shop === selectedShop ? styles.active : ""
                  }`}
                >
                  {shop}
                </Link>
              </li>
            ))
          ) : (
            <p>...Loading</p>
          )}
        </ul>
      </div>
      <div className={styles.productsWrapper}>
        {products ? (
          <ProductList products={products.products} />
        ) : (
          <p>...Loading</p>
        )}
      </div>
    </section>
  );
};

export default Shops;
