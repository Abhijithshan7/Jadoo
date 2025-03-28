"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navbar.module.scss";
import Logo from "../assets/Logo.png";

const languages = [
  { code: "EN", name: "English" },
  { code: "FR", name: "French" },
  { code: "ES", name: "Spanish" },
  { code: "DE", name: "German" },
  { code: "IT", name: "Italian" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]); // Default EN

  const handleLanguageChange = (lang: { code: string; name: string }) => {
    setSelectedLang(lang);
    setLangOpen(false); // Close dropdown after selection
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="d-flex align-items-center justify-content-between w-100 px-3">
        <Link href="/" className={styles.navbarBrand}>
          <Image src={Logo} alt="Logo" width={144} height={34} priority />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className={styles.navbarToggler} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.togglerIcon}></span>
        </button>

        <div className={`${styles.navbarCollapse} ${isOpen ? styles.show : ""}`}>
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Destinations</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#destinations" className={styles.navLink}>Hotels</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#services" className={styles.navLink}>Flights</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Bookings</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Login</Link>
            </li>

            {/* Sign-up Button */}
            <button className={styles.signupButton}>Sign up</button>

            {/* Language Selector */}
            <div className={styles.languageSelector}>
              <button onClick={() => setLangOpen(!langOpen)} className={styles.languageButton}>
                {selectedLang.code} <span className={`${styles.arrow} ${langOpen ? styles.open : ""}`}>▼</span>
              </button>

              {langOpen && (
                <ul className={styles.languageDropdown}>
                  {languages.map((lang) => (
                    <li key={lang.code} onClick={() => handleLanguageChange(lang)}>
                      {lang.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
