import React from 'react';

import styles from './Article.module.css';

type AppProps = {
    country: string,
    yearEnd: number | string,
    yearStart?: number | string,
    title: string,
    description: string;

};

const Article = ({country, yearStart, yearEnd, description, title}: AppProps) => {
    let yearString: string;
    if (yearStart) {
        yearString = `${yearStart} to ${yearEnd}`;
    } else {
        yearString = `${yearEnd}`;
    }
    return <article className={styles.article}>
        <p className={styles.year}>{country} - {yearString}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </article>;
};

export default Article;