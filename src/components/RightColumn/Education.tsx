import { Fragment } from "react";
import Article from "../UI/Article";
import Title from "../UI/Title";
import education from "../../assets/svg/education-graduation-learning-school-study-svgrepo-com.svg";

// type AppProps = {
//
// };

const Education = () => {
  return (
    <Fragment>
      <Title icon={education}>Education</Title>

      <Article
        country="Brazil"
        yearEnd={2018}
        title="Licentiate degree in Mathematics"
        description="Universidade de Uberaba"
      />
      <Article
        country="Brazil"
        yearEnd={2015}
        title="Aircraft Maintenance"
        description="Escola de Aviação Civil Hélio Roberto do Amaral Ltda"
      />
      <Article
        country="Brazil"
        yearEnd={2013}
        title="Industrial Mechanics and Maintenance Technology"
        description="Instituto Federal do Espírito Santo"
      />
    </Fragment>
  );
};

export default Education;
