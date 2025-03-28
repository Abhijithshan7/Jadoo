import React from "react";
import styles from "../../styles/Brands.module.scss";
import Image from "next/image";

// Importing brand images
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";

const Brands = () => {
  const airlines = [
    { name: "Jetstar", id: "jetstar", logo: brand1 },
    { name: "Expediq", id: "expediq", logo: brand2 },
    { name: "Qantas", id: "qantas", logo: brand3 },
    { name: "Alitalia", id: "alitalia1", logo: brand4 },
    { name: "Lufthansa", id: "lufthansa", logo: brand5 },
  ];

  return (
    <div className={styles.airlineLogosContainer}>
      <div className={styles.gridContainer}>
        {airlines.map((airline) => (
          <div key={airline.id} className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
              <Image
                src={airline.logo}
                alt={airline.name}
                layout="responsive"
                objectFit="contain"
                priority
                quality={90}
                className={styles.logoImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
