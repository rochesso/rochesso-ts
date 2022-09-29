import React from 'react';
import styles from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

type AppProps = {
    to: string,
    title: string;
    onClickHandler: (location: string, LeftColumnIsOpen: boolean) => void,
    leftColumnIsOpen: boolean;
    location: string;
};


const NavItem = ({to, title, onClickHandler, location, leftColumnIsOpen}: AppProps) => {
    const locationHandler = () => {
        if (location === to) {
            onClickHandler(to, !leftColumnIsOpen);
        } else {
            onClickHandler(to, false);
        }

    };
    const activeLink = (isActive: boolean) =>
        isActive ? `${styles.isActive} ${styles.navItem}` : styles.navItem;

    return <li className={styles.listItem}>
        <NavLink
            className={({isActive}) =>
                activeLink(isActive)}
            to={to}
            onClick={locationHandler}
        >{title}

        </NavLink>
    </li>;

};

export default NavItem;