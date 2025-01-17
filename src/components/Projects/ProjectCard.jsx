import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, skills, source } = project;

    return (
        <div className={styles.container}>
            
                <img className={styles.Image} src={imageSrc} alt={`Image of ${title}`} loading="lazy"/>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li className={styles.skill} key={id}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>Source Code</a>
            </div>
        </div>
    );
};
