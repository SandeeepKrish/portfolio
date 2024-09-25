import React from 'react'
import { getImageUrl } from './../../utils';
import styles from "./About.module.css";

const About = () => {
    return <section className={styles.container} id="about">
        <h1 className={styles.item}>About</h1>
        <div className={styles.content}>
            <img src={getImageUrl("about/Screenshot 2023-07-13 192437.png")} className={styles.aboutImage}>
            </img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> <img src={getImageUrl("about/cursorIcon.png")}></img>
                    <div className={styles.aboutItemText}>
                        <h3> FrontEnd DEveloper</h3>
                        <p> I'm a frontend developer with experience in building responsive
                            and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}> <img src={getImageUrl("about/serverIcon.png")}></img>
                    <div className={styles.aboutItemText}>
                        <h3> BackEnd DEveloper</h3>
                        <p>   I have experience developing fast and optimised back-end systems
                            and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}> <img src={getImageUrl("about/cursorIcon.png")}></img>
                    <div className={styles.aboutItemText}>
                        <h3> Data Analytics</h3>
                        <p> Skilled in data analytics, proficient in analyzing data patterns, generating insights, and making data-driven decisions for impactful results</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>


}

export default About
