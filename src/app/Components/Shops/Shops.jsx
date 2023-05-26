"use client";

import { useState, useEffect } from "react";
import styles from "./Shops.module.scss";
import Link from "next/link";
import ProductList from "../ProductList/ProductList";
import { getShops } from "@/app/services/getShops";
import { getProducts } from "@/app/services/getProducts";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState("smartphones");
console.log('selectedShop',selectedShop);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts(selectedShop);
      setProducts(fetchedProducts);
    };

    fetchData();
  }, [selectedShop]);

  useEffect(() => {
    const getData = async () => {
      const fetchedShops = await getShops();
      setShops(fetchedShops);
    };

    getData();
  }, []);

  const handleClick = async (shop) => {
    try {
      const data = await getProducts(shop);
      setSelectedShop(shop);
      setProducts(data);
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
