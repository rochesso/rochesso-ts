import { Fragment } from "react";

import experiences from "../../assets/svg/man-office-worker-svgrepo-com.svg";

import Title from "../UI/Title";
import Article from "../UI/Article";

const EXPERIENCES = [
  {
    country: "England",
    yearStart: "Aug 2022",
    yearEnd: "Mar 2023",
    title: "Duty Manager",
    description: "Premier Inn, Media City, Manchester",
  },
  {
    country: "England",
    yearStart: "Jul 2021",
    yearEnd: "Jun 2022",
    title: "Agency Supervisor",
    description: "People Solutions, Missguided, Manchester",
  },
  {
    country: "England",
    yearStart: "Oct 2020",
    yearEnd: "Jul 2021",
    title: "Stock Control",
    description: "People Solutions, Missguided, Manchester",
  },
  {
    country: "England",
    yearStart: "Dec 2018",
    yearEnd: "Oct 2020",
    title: "Self Employed",
    description: "London and Greater Manchester",
  },
  {
    country: "Brazil",
    yearStart: "Jan 2017",
    yearEnd: "Jul 2018",
    title: "Mathematics Teacher",
    description: "Escola Estadual Jose Cupertino",
  },
];

// type AppProps = {
//
// };

let key = 0;

const Experiences = () => {
  return (
    <Fragment>
      <Title icon={experiences}>Experiences</Title>

      {EXPERIENCES.map((item) => {
        key++;
        return (
          <Article
            key={key}
            country={item.country}
            yearStart={item.yearStart}
            yearEnd={item.yearEnd}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </Fragment>
  );
};

export default Experiences;
