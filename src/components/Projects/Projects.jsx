import React from 'react';
import projects from "../../data/projects.json"

import Projectcard from './Projectcard';
import styles from "./Projects.module.css";


const Projects = () => {
    return(
        <section  className={styles.container}id="Projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                projects.map((wtsapp, id) => 

                {
                    return( 
                        <Projectcard key={id} project={wtsapp}/>
                    );

                   
                })}
            </div>
        </section>
    );

}

export default Projects
