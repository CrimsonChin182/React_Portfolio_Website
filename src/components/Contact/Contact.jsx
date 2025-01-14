import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
    return ( <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Please reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={"/emailIcon.png"} alt="Email Icon"/>
                <a href="mailto:abtowey@live.com">abtowey@live.com</a>
            </li>
            <li className={styles.link}>
                <img src={"/linkedinIcon.png"} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/alex-towey-026581344/">Linkedin.com/AlexTowey</a>
            </li>
            <li className={styles.link}>
                <img src={"/githubIcon.png"} alt="gitHub Icon"/>
                <a href="https://github.umn.edu/TOWEY039">github.com/TOWEY039</a>
            </li>
        </ul>
    </footer>
    );
}