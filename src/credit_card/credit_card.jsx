import React from 'react';
import styles from './credit_card.module.css';

const CreditCard = () => (
    <section>
        <div className={styles.card}>
            <div className={`${styles.face} ${styles.front}`}>
            <h3 className={styles.debit}>Crystal Card</h3>
            <h3 className={styles.bank}>KB Bank</h3>
            <img src="/images/chip.png" className={styles.chip} alt="chip" />
            <h3 className={styles.number}>0123 4567 8901 2345</h3>
            <h5 className={styles.valid}><span>Vallid<br/>thru</span><span>10/23</span></h5>
            <h5 className={styles.cardHolder}>SOOJUNG LEE</h5>
            </div>
            <div className={`${styles.face} ${styles.back}`}>
            <div className={styles.blackbar}></div>
            <div className={styles.ccvtext}>
                <h5>Authorized Signature-not valid unless signed</h5>
                <div className={styles.whiteBar}></div>
                <div className={styles.ccv}>123</div>
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at scelerisque nunc. Sed condimentum justo eget dignissim gravida. Morbi sit amet massa dui. Cras augue urna, ornare vestibulum venenatis id, finibus nec quam. Proin at arcu laoreet, finibus nisi ut, tristique metus. Morbi vel quam nec dolor egestas consectetur. Aliquam porttitor est interdum justo posuere viverra.
            </p>
            </div>
        </div>
    </section>
);

export default CreditCard;