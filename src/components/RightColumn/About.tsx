import { Fragment } from "react";
import styles from "./About.module.css";
import facePicture from "../../assets/img/face-square.jpg";
import SocialNetworks from "../UI/SocialNetworks";
// type AppProps = {
//
// };

const About = () => {
  return (
    <Fragment>
      <h3 className={styles.title}>Arthur Rochesso</h3>
      <img className={styles.img} src={facePicture} alt="Arthur Rochesso" />

      <article className={styles.article}>
        <p className={styles.text}>
          Mathematics and technology have always been my passion. I always
          enjoyed exploring different Linux distributions, building my own pc,
          creating excel spreadsheets using VBA and solving maths problems.
        </p>
        <p className={styles.text}>
          I have completed my degree in Mathematics in 2018, worked as a maths
          teacher and it was amazing, but it was in 2020 after moving to England
          that someone introduced me to the web development world, and I found
          it fascinating how it's possible to create basically anything coding.
        </p>
        <p className={styles.text}>
          Since then, learning about web development has become my hobby, and
          when I am coding, time just flies. Instead of watching a TV show or
          playing a game, coding is my new way to have fun, and why not work
          with something you love to do? That's how I decided to become a full
          stack web developer.
        </p>
      </article>
      <SocialNetworks></SocialNetworks>
    </Fragment>
  );
};

export default About;
