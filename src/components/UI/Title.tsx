import React, { Fragment } from "react";
import styles from "./Title.module.css";

type AppProps = {
  children: string;
  icon?: string;
};

const Title = ({ children, icon }: AppProps) => {
  return (
    <Fragment>
      <h3 className={styles.title}>{children}</h3>
      {icon ? <img className={styles.img} src={icon} alt={children} /> : null}
    </Fragment>
  );
};

export default Title;
