import React from "react";
import styles from "../styles/home.module.css";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Facebook from "../assets/icons/facebook.png";
import UsedItems from "../assets/images/items.png";
import Money from "../assets/images/money.png";
import Arrow from "../assets/illustrations/arrow.svg";
import MeetNeeds from "../assets/illustrations/meet_needs.svg";
import Radar from "../assets/illustrations/radar 1.svg";
import MoneyBack from "../assets/illustrations/Money_back.svg";
import Security from "../assets/illustrations/Privacy 1.svg";
import Exclamation from "../assets/illustrations/exclamation.svg";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <nav className={styles.nav}>
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
      </nav>
      <main>
        <h1 className={styles.get_cash}>Get cash for your used items</h1>
        <section className={styles.section__text_container}>
          <p>
            Do you have a bunch of old items you have no idea what to do with?{" "}
            <br />
            Don’t worry! We sympathise with you! Peddle is a platform where{" "}
            <br /> you can sell used items for cool cash! After all, <br />{" "}
            another man’s food is another man’s poison
          </p>
        </section>
        <section className={styles.section__image_container}>
          <div className={styles.container}>
            <div className={styles.used_arrow}>
              <img src={UsedItems} alt="" className={styles.used_items} />
              <img src={Arrow} alt="" className={styles.arrow} />
            </div>
            <img src={Money} alt="" className={styles.money} />
          </div>
        </section>
        <section className={styles.uses}>
          <div className={`${styles.use}`}>
            <div className={styles.uses__text_container}>
              <h3>
                Meet <span>Specific</span> needs
              </h3>
              <p>
                Ever needed an item and it’s suddenly turned to gold at all the
                stores? Peddle has you covered! You can request for a used
                version on Peddle and get a deal close to you! You also get it
                for cheaper than you’d get a new one at the store. Save money
                and still get the job done. <br />
                <span>Bliss!</span>
              </p>
            </div>
            <div className={styles.uses__image_container}>
              <img src={MeetNeeds} alt="" />
            </div>
          </div>
          <div className={`${styles.use} ${styles.reverse}`}>
            <div className={styles.uses__text_container}>
              <h3>
                Meet <span>Specific</span> needs
              </h3>
              <p>
                This is a no-scam zone! You can be sure your money is going to
                get you quality because Peddle has made transactions more
                secure. On Peddle, payments are only sent to the seller after
                quality confirmation from buyers.
              </p>
            </div>
            <div className={styles.uses__image_container}>
              <img src={MoneyBack} alt="" />
            </div>
          </div>
          <div className={styles.alert_section}>
            <div className={styles.alert_container}>
              <h3>Tag Item Requests as Urgent</h3>
              <p>
                On Peddle, you can tag your requests as urgent, to put them on
                the priority list! This gives your request more attention and
                you can get that screwdriver that Shoprite doesn’t have in time
                to fix your microwave! <span>Whoop whoop</span>
              </p>
              <button>Start Requesting</button>
              <img src={Exclamation} alt="" />
            </div>
          </div>
          <div className={`${styles.use}`}>
            <div className={styles.uses__text_container}>
              <h3>
                Privacy of <span>personal information</span>
              </h3>
              <p>
                Your sensitive personal information will not be shared on your
                account profile. Only information like your previous sales and
                customer ratings will be made visible to the public. Safe and
                secure!
              </p>
            </div>
            <div className={styles.uses__image_container}>
              <img src={Security} alt="" />
            </div>
          </div>
          <div className={styles.email_section}>
            <input type="text" placeholder="Type in your email address" />
            <button>REACH OUT</button>
          </div>
          <div className={`${styles.use} ${styles.reverse}`}>
            <div className={styles.uses__text_container}>
              <h3>
                <span>Proximity</span> considerations
              </h3>
              <p>
                Peddle allows sellers to list where their products are and add
                them to locations. Hence, you can search for a location and it
                will bring up Peddle markets close to you. No need to ship your
                kettle from Abuja and wait 72 weeks. Peddle brings your unique
                needs right to your home
              </p>
            </div>
            <div className={styles.uses__image_container}>
              <img src={Radar} alt="" />
            </div>
          </div>
          <button>Get Started</button>
        </section>
      </main>
    </>
  );
}
