import React from "react";
import Image from "next/image";
import Rome from "../assets/Rome.png";
import London from "../assets/London.png";
import Europe from "../assets/Europe.png";
import navigation from "../assets/navigation.png";
import styles from "../../styles/topSelling.module.scss";

interface Product {
  id: number;
  name: string;
  price: string;
  date: string;
  image: StaticImageData;
  image2: StaticImageData;
}

const topSellingProducts: Product[] = [
  {
    id: 1,
    name: "Rome, Italty",
    price: "$5,42k",
    date: "10 Days Trip",
    image: Rome,
    image2: navigation,
  },
  {
    id: 2,
    name: "London, UK",
    price: "$4.2k",
    date: "10 Days Trip",
    image: London,
    image2: navigation,
  },
  {
    id: 3,
    name: "Full Europe",
    price: "$15k",
    date: "10 Days Trip",
    image: Europe,
    image2: navigation,
  },
];

const TopSelling: React.FC = () => {
  return (
    <section className={styles.topSelling}>
      <div className={styles.header}>
        <h4>Top Selling</h4>
        <h2>Best-Selling Products</h2>
      </div>
      
      <div className={styles.productContainer}>
        {topSellingProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={product.image} 
                alt={product.name}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            
            <div className={styles.productCardContent}>
              <div className={styles.destinationInfo}>
                <h3>{product.name}</h3>
                <Image 
                  src={product.image2} 
                  alt="navigation icon"
                  width={20}
                  height={20}
                />
              </div>
              
              <div className={styles.priceDate}>
                <p>{product.price}</p>
                <p>{product.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;