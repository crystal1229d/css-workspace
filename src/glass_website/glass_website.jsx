import React from 'react';
import styles from './glass_website.module.css';

const GlassWebsite = () => (
    <section className={styles.glasswebsite}>
        <div className={styles.container}>
            <header>
                <a href="#" className={styles.logo}>Logo</a>
                <ul>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            <div className={styles.content}>
                <h2>Glassmorphism UI</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at scelerisque nunc. Sed condimentum justo eget dignissim gravida. Morbi sit amet massa dui. Cras augue urna, ornare vestibulum venenatis id, finibus nec quam. Proin at arcu laoreet, finibus nisi ut, tristique metus. Morbi vel quam nec dolor egestas consectetur. Aliquam porttitor est interdum justo posuere viverra.</p>
                <a href="#">Read More</a>
            </div>
            <div className={styles.imgBx}>
                <img src="../../images/character.png" alt="character"/>
            </div>
            <ul className={styles.sci}>
                <li><a href="#"><img src="../../images/facebook.png" alt="facebook"/></a></li>
                <li><a href="#"><img src="../../images/twitter.png" alt="twitter"/></a></li>
                <li><a href="#"><img src="../../images/instagram.png" alt="instagram"/></a></li>
            </ul>
            <p className={styles.copyrightText}>Copyright @ 2021 Online Tutorials. All Right Reserved.</p>
        </div>
    </section>
);

export default GlassWebsite;