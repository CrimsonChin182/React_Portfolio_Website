import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with experience in building responsive and user-friendly websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have developed back-end code which allows seamless interaction between the frontend and its respective database for a variety of user operations</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Cybersecurity</h3>
                            <p>I have experience developing code to prevent SQL injection attacks, ensuring database security and integrity.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>UX designer</h3>
                            <p>Through the Minnetonka High School VANTAGE program, I interviewed clients and developed responsive wireframes based on their needs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Group Collaboration</h3>
                            <p>I have worked collaboratively with teams on multiple projects, contributing to code development, creating test cases, and coordinating efforts to upload and merge shared progress using GitHub.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Custom PC Expertise</h3>
                            <p>I have built, optimized, repaired, and resold custom gaming PCs for personal use, as well as for friends and clients.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}