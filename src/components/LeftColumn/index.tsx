import { Fragment } from "react";

import faceSquare from "../../assets/img/face-square.jpg";
import brazilIcon from "../../assets/svg/brazil-flag.svg";
import ukIcon from "../../assets/svg/uk-flag.svg";

import styles from "./index.module.css";

// type AppProps = {};

const LeftColumn = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <img
        className={styles.faceSquare}
        src={faceSquare}
        alt="Arthur Rochesso."
      />
      <h1 className={styles.name}>Arthur Rochesso</h1>
      <h2 className={styles.role}>Web Developer</h2>
      <p className={styles.about}>
        Self taught Web Developer looking for an entry level opportunity.
      </p>

      <h3 className={styles.title}>Contact</h3>
      <p className={styles.contactPhone}>(+44) 0795 101 8007</p>
      <p className={styles.contactAddressCity}>Manchester, UK</p>
      <a
        className={styles.contactEmail}
        href="mailto:rochesso@outlook.com"
        title="Email me"
        rel="noreferrer"
        target="_blank"
      >
        rochesso@outlook.com
      </a>

      <h3 className={styles.title}>Languages:</h3>
      <div className={styles.languagesContainer}>
        <img
          className={styles.languagesImg}
          src={brazilIcon}
          alt="Brazil - Portuguese"
        />
        <img
          className={styles.languagesImg}
          src={ukIcon}
          alt="United Kingdom - English"
        />
      </div>

      <p className={styles.copyright}>Arthur Rochesso {year}©</p>
    </Fragment>
  );
};

export default LeftColumn;
