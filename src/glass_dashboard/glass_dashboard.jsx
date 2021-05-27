import React from 'react';
import styles from './glass_dashboard.module.css';

const GlassDashboard = () => (
    <section className={styles.glass_dashboard}>
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="#" alt="logo" />
                    <span className={styles.logoname}>logo name</span>
                </div>

                <div className={styles.searchbox}>
                    <form action="">
                        <input type="text" placeholder="search" />
                        <i className="fa fa-search"></i>
                        {/* <FontAwesomeIcon icon={faSearch} className={search} /> */}
                    </form>
                </div>

                <div className={styles.navitem}>
                    <div className={styles.lang}>
                        <select name="" id="">
                            <option value="">Korean</option>
                            <option value="">English</option>
                        </select>
                    </div>

                    <div className={styles.icons}>
                        <ul>
                            <li><i className="fa fa-envelope"></i></li>
                            <li><i className="fa fa-bell"></i></li>
                        </ul>
                    </div>

                    <div className={styles.account}>
                        <img src="" alt="" />
                        <span className={styles.name}>Crystal</span>
                        <span className={styles.username}>@crystal1229</span>
                    </div>
                </div>
            </div>

            <div className={styles.container_body}>
                <div className={styles.sidebar}>
                    <ul>
                        <li className={styles.dashboard}>
                            <i className="fa fa-dahscube"></i>
                            <a href="#">Dashboard</a>
                        </li>
                        <li className={styles.dashboard}>
                            <i className="fa fa-money"></i>
                            <a href="#">balance</a>
                        </li>
                        <li className={styles.dashboard}>
                            <i className="fa fa-envelope"></i>
                            <a href="#">invoice</a>
                        </li>
                        <li className={styles.dashboard}>
                            <i className="fa fa-credit-card"></i>
                            <a href="#">card</a>
                        </li>
                        <li className={styles.dashboard}>
                            <i className="fa fa-history"></i>
                            <a href="#">history</a>
                        </li>
                        <li className={styles.dashboard}>
                            <i className="fa fa-info-circle"></i>
                            <a href="#">details</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.main_body}>
                    <div className={styles.title}>
                        <span className={styles.greeting}>Hi Crystal</span>
                        <h2>Overview</h2>
                    </div>

                    <div className={styles.cards}>
                        <div className={`${styles.row} ${styles.row_1}`}>
                            <div className={styles.col}>
                                <h3 className={styles.cardtitle}>Balance</h3>
                                <h2 className={styles.balance}>30,000,000 (KR)</h2>
                                <span className={styles.balancestatus}>+15%</span>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.col}>
                                <div className={styles.latest_activity}>
                                    <h3 className={styles.cardtitle}>Lastest activity</h3>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.debit_card}>
                                    <h3 className={styles.cardtitle}>My card</h3>
                                    <h3 className={styles.cardnumber}>1234 5678 9101 1123</h3>
                                    <h3 className={styles.cardholder}>Crystal Lee</h3>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.row} ${styles.row_2}`}>
                            <div className={styles.col}>
                                <div className={styles.total_invoice}>Total invoice</div>
                                <span className={styles.t_i}>520</span>
                                <span className={styles.status}>+12%</span>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.paid_invocie}>Paid invoice</div>
                                <span className={styles.t_i}>520</span>
                                <span className={styles.status}>
                                    +85%
                                    <i className="fa fa-line-chart"></i>
                                </span>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.unpaid_invoice}>Unpaid invoice</div>
                                <span className={styles.u_i}>520</span>
                                <span className={styles.status}>
                                    +15%
                                    <i className="fa fa-line-chart"></i>
                                </span>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.invoice_sent}>Total invoice</div>
                                <span className={styles.i_s}>520</span>
                                <span className={styles.status}>
                                    +12%
                                    <i className="fa fa-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default GlassDashboard;