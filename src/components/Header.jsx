"use client"; // Ensures that this component runs on the client

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import logoHeader from "../assets/MG-Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/connect", label: "CONNECT" },
  { href: "/blogs", label: "BLOGS" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} ${isOpen ? styles.showMenu : ""}`}>
      <div className={styles.header__logo}>
        <Image src={logoHeader} alt="Mayank Garg Logo" width={60} height={50} priority/>
      </div>
      <div className={styles.header__name}>THE MAYANK GARG</div>

      {/* Hamburger Menu Icon */}
      <div className={styles.header__menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <nav className={styles.header__nav}>
        {navLinks.map(({ href, label }, index) => (
          <Link key={index} href={href} className={styles.header__navItem}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
