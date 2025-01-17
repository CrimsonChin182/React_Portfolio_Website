import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return  ( <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}> 
                {skills.map((skill, id) => {
                    return (
                        <div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer}><img src={skill.imageSrc} alt={skill.title}/></div>
                            <p>{skill.title}</p>
                        </div>
                );
            })}
            </div>
        <ul className={styles.history}>
            {
                history.map((historyItem, id) => {
                    return <li className={styles.historyItem} key={id}>
                        <img src={historyItem.imageSrc} alt={`${historyItem.role}`} loading="lazy" />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                return <li key = {id}>{experience}</li>;
                            })}
                            </ul>
                        </div>
                    </li>
                })
            }
        </ul>
        </div>
    </section>
    );
};