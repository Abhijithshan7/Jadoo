import React from 'react';
import Image from 'next/image';

import styles from "../../styles/hero.module.scss";
import decorImage from "../assets/Image.png";
import polygonIcon from "../assets/Polygon.png"; 

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className={`${styles.hero} d-flex align-items-center`}>
             {/* <div className={styles.Herobgimg}> */}

      <div className="container">
       

      <div className="row align-items-center flex-lg-row-reverse">
  {/* Image Column (Now on Left for Desktop) */}
  <div className="col-lg-5 col-md-12">
    <div className={styles.heroImage}>
      <Image
        src={decorImage}
        alt="Travel destination"
        layout="responsive"
        objectFit="contain"
        priority
        quality={90}
      />
    </div>
  </div>

  {/* Text Column (Now on Right for Desktop) */}
  <div className="col-lg-7 col-md-12">
    <div className={styles.heroContent}>
      <h3 className={styles.subtitle}>
        Best Destinations around the world
      </h3>
      <h1 className={styles.title}>
        Travel, enjoy and live a new and full life
      </h1>
      <p className={styles.description}>
        Built Wicket longer admire do barton vanity itself do in it. 
        Preferred to sportsmen it engrossed listening. Park gate sell 
        they west hard for the.
      </p>
      <div className={styles.actionButtons}>
        <button className={`${styles.primaryBtn} btn`} aria-label="Find out more">
          Find out more
        </button>
        <button className={`${styles.playButton} btn`} aria-label="Play Demo">
          <div className={styles.playButtonIcon}>
            <Image
              src={polygonIcon}
              alt="Play icon"
              width={20}
              height={20}
              priority
            />
          </div>
          Play Demo
        </button>
      </div>
    </div>
  </div>
</div>

      
      
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;