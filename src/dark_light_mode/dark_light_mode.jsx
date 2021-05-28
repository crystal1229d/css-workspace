import React, { useState } from 'react';
import styles from './dark_light_mode.module.css';

const DarkLightMode = () => {
    const [mode, setMode] = useState('light');
    const onChangeMode = e => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <section className={`${styles.darklightmode}`}>
        <div className={styles.card}>
            <div className={styles.toggle} onClick={onChangeMode}></div>
            <div className={styles.content}>
                <div className={styles.imgText}>
                    <div className={styles.imgBx}>
                        <img src="../../images/worker.jpg" alt="profile image" />
                    </div>
                    <h3>Crystal Lee<br /><span>Frontend Developer</span></h3>
                </div>
                <ul className={styles.sci}>
                    <li><a href="#"><i className={`fab fa-github ${styles.icon}`} aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className={`fab fa-twitter ${styles.icon}`} aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className={`fab fa-linkedin ${styles.icon}`} aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default DarkLightMode;