import React from "react";
import styles from "./ThreeColumns.module.css";

type AppProps = {
  left: React.ReactNode;
  central: React.ReactNode;
  right: React.ReactNode;
  leftColumnIsOpen: boolean;
};

const ThreeColumns = ({ left, central, right, leftColumnIsOpen }: AppProps) => {
  // This will change the style of the left column. The left column becomes hidden when not in the home page.
  let leftStyle: string;
  if (leftColumnIsOpen) {
    leftStyle = styles.mainLeft;
  } else {
    leftStyle = `${styles.mainLeft} ${styles.mainLeftHidden}`;
  }

  return (
    <main className={styles.main}>
      <section className={leftStyle}>{left}</section>
      <section className={styles.mainCentral}>{central}</section>
      <section className={styles.mainRight}>{right}</section>
    </main>
  );
};

export default ThreeColumns;
