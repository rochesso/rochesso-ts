import styles from './SkillsItem.module.css';

type AppProps = {
    title: string,
    alt: string,
    icon: string;
};

const SkillsItem = ({title, alt, icon}: AppProps) => {
    return (
        <li className={styles.skillsItem}>
            <h3 className={styles.skillsTitle}>{title}</h3>
            <img src={icon} className={styles.skillsImg} alt={alt}></img>
        </li>
    );
};

export default SkillsItem;
