import { Fragment } from "react";
import Education from "./Education";
import Experiences from "./Experiences";
import { Route, Routes } from "react-router-dom";
import Skills from "./Skills";
import About from "./About";
import styles from "./index.module.css";

// type AppProps = {
//
// };

const RightColumn = () => {
  return (
    <Fragment>
      <span className={styles.marginTop}></span>

      <Routes>
        <Route path="/" element={<Education />} />
        <Route path="education" element={<Education />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default RightColumn;
