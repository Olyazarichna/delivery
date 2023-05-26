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
  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedShops = await getShops();
      setShops(fetchedShops);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedShop !== "") {
      const fetchProducts = async () => {
        const fetchedProducts = await getProducts(selectedShop);
        setProducts(fetchedProducts);
      };
      fetchProducts();
    }
  }, [selectedShop]);

  const handleClick = async (shop) => {
    try {
      setSelectedShop(shop);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // const handleClick = async (shop) => {
  //   try {
  //     setSelectedShop(shop);
  //     const data = await getProducts(shop);
  //     setProducts(data);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };
  console.log("selectedShop", selectedShop);
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
