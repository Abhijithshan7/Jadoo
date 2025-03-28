import React from "react";
import Image from "next/image";
import styles from "../../styles/category.module.scss";
import CalculatedWeather from "../assets/CalculatedWeather.png"; 
import BestFlights from "../assets/BestFlights.png"; 
import Customization from "../assets/Customization.png"; 
import LocalEvents from "../assets/LocalEvents.png"; 


const cardData = [
  {
    id: 1,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: CalculatedWeather,
  },
  {
    id: 2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: BestFlights,
  },
  {
    id: 3,
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    image: LocalEvents,
  },
  {
    id: 4,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers.",
    image: Customization,
  },
];

const Category = () => {
  return (
    <div className={styles.section}>

<div className={styles.category}>
      <h4>Category</h4>
      <h2>We Offer Best Services</h2>

      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <div key={card.id} className={styles.cardSection}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={92}
                  height={78}
                  priority
                />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className={styles.cardBox}></div>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Category;