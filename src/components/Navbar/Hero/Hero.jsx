import React from 'react'
import styles from './Hero.module.css';
import { Navbar } from '../Navbar';
import { getImageUrl } from '../../../utils';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alex!</h1>
                <p className={styles.description}>
                I am a web developer pursuing a career in computer science. I built this website using React and Node.js to showcase my projects and skills.
                </p>
            <a href="mailto:abtowey@live.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={"/alexPhoto.png"} alt='Image of Alex' className={styles.alexPhoto}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};