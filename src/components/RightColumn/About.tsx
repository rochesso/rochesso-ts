import React, {Fragment} from 'react';
import styles from './About.module.css';
import facePicture from '../../assets/img/face-square.jpg';
import SocialNetworks from '../UI/SocialNetworks';
// type AppProps = {
//
// };

const About = () => {

    return <Fragment>
        <h3 className={styles.title}>Arthur Rochesso</h3>
        <img className={styles.img} src={facePicture} alt="Arthur Rochesso"/>

        <article className={styles.article}>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate
                delectus
                dicta ea earum enim id,
                in nihil odit perspiciatis placeat porro quis repudiandae saepe sapiente soluta temporibus. Tenetur,
                unde!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto
                assumenda commodi, dolorum
                enim exercitationem illum laudantium magni mollitia necessitatibus nulla, optio porro, quo repellat
                tempore!
                Dicta iste maxime veniam!</p>
        </article>
        <SocialNetworks></SocialNetworks>
    </Fragment>;

};

export default About;