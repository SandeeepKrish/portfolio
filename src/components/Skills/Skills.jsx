import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import styles from "./Skill.module.css"

const Skills = () => {
  return <section className={styles.container} id="Skills">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                    <div className={styles.skillImagecontainer} ><img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.imge}></img>
                        
                    </div>
                    <p className={styles.Skillset}> {skill.title} </p>
                </div>    
                })
            }
            <ul>

            </ul>
        </div>
    </div>

  </section>
  
}

export default Skills
