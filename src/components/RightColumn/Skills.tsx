import styles from "./Skills.module.css";

import htmlIcon from "../../assets/svg/icons8-html-5.svg";
import cssIcon from "../../assets/svg/icons8-css3.svg";
import javascriptIcon from "../../assets/svg/icons8-javascript.svg";
import reactIcon from "../../assets/svg/icons8-react-native.svg";
import nodejsIcon from "../../assets/svg/icons8-nodejs.svg";
import pythonIcon from "../../assets/svg/icons8-python.svg";
import rocket from "../../assets/svg/rocket-launch.svg";
import skills from "../../assets/svg/skills-svgrepo-com.svg";

import SkillsItem from "./SkillsItem";
import Title from "../UI/Title";

const SKILLS = [
  {
    title: "HTML",
    alt: "HTML icon",
    icon: htmlIcon,
    key: Math.random().toString(),
  },

  {
    title: "CSS",
    alt: "CSS icon",
    icon: cssIcon,
    key: Math.random().toString(),
  },

  {
    title: "JavaScript",
    alt: "JavaScript icon",
    icon: javascriptIcon,
    key: Math.random().toString(),
  },

  {
    title: "ReactJS",
    alt: "ReactJS icon",
    icon: reactIcon,
    key: Math.random().toString(),
  },

  {
    title: "NodeJS",
    alt: "NodeJS icon",
    icon: nodejsIcon,
    key: Math.random().toString(),
  },

  {
    title: "Python",
    alt: "Python icon",
    icon: pythonIcon,
    key: Math.random().toString(),
  },
];

// type AppProps = {
//
// };

const Skills = () => {
  const skillList = SKILLS.map((skill) => (
    <SkillsItem
      key={skill.key}
      title={skill.title}
      alt={skill.alt}
      icon={skill.icon}
    />
  ));
  return (
    <article className={styles.skills}>
      <Title icon={skills}>Skills</Title>
      <ul className={styles.skillsList}>{skillList}</ul>

      <img src={rocket} className={styles.rocket} alt="And more skills"></img>
      <h3 className={styles.rocketText}>And more!</h3>
    </article>
  );
};

export default Skills;
