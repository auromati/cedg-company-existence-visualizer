import styles from './ceidg-header.module.css';
import ceidg from '../../../img/ceidg.png';
import React from 'react';
import Image from 'react-bootstrap/Image'

export function CeidgHeader() {
    return (
    <header className={styles.header}>
        <article className={styles.heading}>
        <h1>Wizualizacja danych z CEiDG</h1>
        <p>
        Eksploracja mająca na celu odpowiedzenie na pytanie - <strong>jakie cechy wpływają na czas trwania "życia" firmy?</strong>
        </p>
        </article>
        <div className={styles.ceidg}>
            <Image src={ceidg} fluid />
        </div>
    </header>);
}