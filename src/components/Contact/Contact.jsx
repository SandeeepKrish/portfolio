import React from 'react'
import { getImageUrl } from './../../utils'
import styles from "./Contact.module.css";

const Contact = () => {
  return <footer className={styles.container} id="Contact">
    <div className={styles.text}>
        <h2>Contact Us</h2>
        <p> Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")}/>
            <a href="mailto:2022d1r020@mietjammu.in"> 2022d1r020@mietjammu.in</a>
           
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")}/>
            <a href="https://www.linkedin.com/feed/"> Linkedin.com/sandeep</a>
           
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")}/>
            <a href="https://github.com/"> gitHub.com/sandeep</a>
           
        </li>
    </ul>
  </footer>
  
  
}

export default Contact
