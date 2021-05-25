import React from 'react';
import styles from './item_card.module.css';

const ItemCard = () => (
    <section className={styles.itemcard}>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="/images/shoes.png" alt="shoes" />
                    <h2>Nike Shoes</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.size}>
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className={styles.color}>
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="/images/shoes.png" alt="shoes" />
                    <h2>Nike Shoes2</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.size}>
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className={styles.color}>
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="/images/shoes.png" alt="shoes" />
                    <h2>Nike Shoes3</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.size}>
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className={styles.color}>
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    </section>
);

export default ItemCard;
