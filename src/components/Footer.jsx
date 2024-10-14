import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import logoFooter from "../assets/MG-Logo.svg";
import fbIcon from "../assets/facebookIcon.svg";
import instaIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/XIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";

const socialMediaIcons = [
  { src: linkedinIcon, alt: "LinkedIn", href: "https://www.linkedin.com/in/mayank-garg-a02995323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { src: instaIcon, alt: "Instagram", href: "https://www.instagram.com/themayankgarg_?igsh=azJnN2lxdWpsaWRr&utm_source=qr" },
  { src: youtubeIcon, alt: "YouTube", href: "https://www.youtube.com/@MGMayankGarg" },
  { src: fbIcon, alt: "Facebook", href: "https://www.facebook.com/YourAccount" },
  { src: twitterIcon, alt: "Twitter", href: "https://x.com/GargMayank26" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/connect", label: "Connect" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/privacy", label: "Privacy Policy" },
];

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__logoContainer}>
      <Image src={logoFooter} alt="Mayank Garg Logo" width={250} height={250} priority/>
    </div>

    <div className={styles.footer__container}>
      <div className={styles.footer__connected}>Follow Mayank!</div>
      <div className={styles.footer__socials}>
        {socialMediaIcons?.map(({ src, alt, href }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <Image src={src} alt={alt} width={40} height={40} priority/>
          </a>
        ))}
      </div>
      <div className={styles.footer__copyright}>
        © 2024 The Mayank Garg - All Rights Reserved.
      </div>
    </div>

    <div className={styles.footer__redirectlinks}>
      {navLinks?.map(({ href, label }, index) => (
        <Link key={index} href={href} className={styles.header__navItem}>
          {label}
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;
