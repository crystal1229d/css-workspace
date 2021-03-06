import React from 'react';
import { useHistory } from 'react-router';
import styles from './main_menu.module.css';

const MainMenu = () => {
    const history = useHistory();
    const goToPage = pageId => {
        history.push(pageId);
    };
    const onMenuBtn = event => {
        goToPage(event.currentTarget.dataset.id);
    }

    return (
        <div className="menu">
            <h1 className="title">Menu</h1>
            <ul>
                <li data-id="card-glass-01" onClick={onMenuBtn}>Glassmorphism Credit Card</li>
                <li data-id="card-glass-02" onClick={onMenuBtn}>Glassmorphism Item Card</li>
                <li data-id="website-glass-03" onClick={onMenuBtn}>Glassmorphism Responsibe Web</li>
                <li data-id="dashboard-glass-04" onClick={onMenuBtn}>Glassmorphism Dashboard</li>
                <li data-id="dark-light-mode-05" onClick={onMenuBtn}>Dark&Light Mode</li>
            </ul>
        </div> 
    );
};

export default MainMenu;