import styles from "./index.module.css";
import NavItem from "./NavItem";
import rightArrow from "../../assets/svg/next-arrows-svgrepo-com.svg";
import leftArrow from "../../assets/svg/previous-arrows-svgrepo-com.svg";

type AppProps = {
  onClickHandler: (location: string, LeftColumnIsOpen: boolean) => void;
  leftColumnIsOpen: boolean;
  location: string;
};

const CentralColumn = ({
  onClickHandler,
  leftColumnIsOpen,
  location,
}: AppProps) => {
  let arrowButton: JSX.Element;
  const LeftColumnIsOpenHandler = () => {
    onClickHandler(location, !leftColumnIsOpen);
  };
  if (leftColumnIsOpen) {
    arrowButton = (
      <img
        className={styles.arrow}
        onClick={LeftColumnIsOpenHandler}
        src={leftArrow}
        alt="Close sidebar"
      />
    );
  } else {
    arrowButton = (
      <img
        className={styles.arrow}
        onClick={LeftColumnIsOpenHandler}
        src={rightArrow}
        alt="Open sidebar"
      />
    );
  }

  const MENU_LINKS = [
    {
      to: "about",
      title: "About",
    },
    {
      to: "education",
      title: "Education",
    },
    {
      to: "experiences",
      title: "Experiences",
    },
    {
      to: "skills",
      title: "Skills",
    },
  ];

  // Key for the NavItem list
  let key = 0;

  return (
    <ul className={styles.list}>
      {arrowButton}

      {MENU_LINKS.map((link) => {
        key++;
        return (
          <NavItem
            location={location}
            leftColumnIsOpen={leftColumnIsOpen}
            onClickHandler={onClickHandler}
            key={key}
            to={link.to}
            title={link.title}
          />
        );
      })}
    </ul>
  );
};

export default CentralColumn;
