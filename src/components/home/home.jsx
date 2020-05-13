import React from 'react';
import styles from './home.module.css';
import ceidg from '../../img/ceidg.png';

export function Home() {
    return (
    <header className={styles.header}>
        <article className={styles.heading}>
        <h1>Wizualizacja danych z CEiDG</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        </article>
        <img src={ceidg} className={styles.ceidg} />
    </header>);
}