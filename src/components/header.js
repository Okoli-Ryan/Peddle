import React, { useState } from "react";
import styles from "../styles/header.module.css";
import Menu from "../assets/icons/hamburger.png";
import PeddleLogo from "../assets/icons/peddle.svg";
import Instagram from "../assets/icons/instagram black.png";
import Twitter from "../assets/icons/twitter black.png";
import Whatsapp from "../assets/icons/whatsapp_black.png";
import Facebook from "../assets/icons/facebook black.png";
import Cancel from "../assets/icons/cancel.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <aside
        className={styles.sideBar}
        style={showMenu ? { left: 0 } : { left: "-100%" }}>
        <div className={styles.cancel_container}>
          <img onClick={() => setShowMenu(false)} src={Cancel} alt="" />
        </div>
        <div className={styles.sideBar_heading}>
          <span>Reach out to us</span>
        </div>
        <aside className={styles.social_media__container}>
          <button className={styles.button}>
            <span className={styles.button__icon_container}>
              <img src={Instagram} alt="" />
            </span>
            <span className={styles.button__text}>Instagram</span>
          </button>
          <button className={styles.button}>
            <span className={styles.button__icon_container}>
              <img src={Twitter} alt="" />
            </span>
            <span className={styles.button__text}>Twitter</span>
          </button>
          <button className={styles.button}>
            <span className={styles.button__icon_container}>
              <img src={Facebook} alt="" />
            </span>
            <span className={styles.button__text}>Facebook</span>
          </button>
          <button className={styles.button}>
            <span className={styles.button__icon_container}>
              <img src={Whatsapp} alt="" />
            </span>
            <span className={styles.button__text}>Whatsapp</span>
          </button>
        </aside>
        <div className={styles.get_started__container}>
          <button>Get Started</button>
        </div>
      </aside>
      <header className={styles.header}>
        <div className={styles.menu__container}>
          <img
            onClick={() => setShowMenu(true)}
            src={Menu}
            alt=""
            className={styles.menu}
          />
        </div>
        <img src={PeddleLogo} alt="" className={styles.logo} />
        <div className={styles.sign_up__container}>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
}
