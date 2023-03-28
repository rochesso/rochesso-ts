import React, { Fragment } from "react";
import styles from "./SocialNetworks.module.css";
import githubIcon from "../../assets/svg/github.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import Title from "./Title";

const SOCIAL = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/rochesso/",
    icon: linkedinIcon,
    key: Math.random().toString(),
  },
  {
    title: "Github",
    link: "https://github.com/rochesso",
    icon: githubIcon,
    key: Math.random().toString(),
  },
];

// type AppProps = {
//
// };

const SocialNetworks = () => {
  return (
    <Fragment>
      <Title>My social networks:</Title>
      <div className={styles.container}>
        {SOCIAL.map((item) => {
          return (
            <div key={item.key} className={styles.item}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  className={styles.itemImg}
                  src={item.icon}
                  alt={item.title}
                />
                <h4 className={styles.itemTitle}>{item.title}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SocialNetworks;
