import React from 'react';
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

const Hero = () => {
    return <section className={styles.container} id="Contactme">
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Sandeep yadav</h1>
            <p className={styles.description}>Detail-oriented web developer with a Master’s in Computer Applications and extensive 
                skills in HTML , CSS , JavaScript , React.js , Node.js , Express.js and database management. Experienced in creating user-friendly applications and enhancing performance through modern frameworks and libraries. Passionate about leveraging technology to deliver insightful solutions.
            </p>
            <a href="mailto:2022d1r020@mietjammu.in" className={styles.contactBtn} id="Contactme"> Contact me</a>

        </div>
        <img src={getImageUrl("hero/Blogprojrcty.jpg")} className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}

export default Hero
