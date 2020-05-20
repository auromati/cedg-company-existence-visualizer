import styles from './ceidg-facts.module.css';
import ceidg from '../../../img/ceidg.png';
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';

export function CeidgFacts() {
    return (
        <section className={styles.ceidgFacts}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>80%</h1>
                    Firm posiadających ponad 5 placówek przetrwało
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>77</h1>
                    Tyle miesięcy wynosi średni czas przetrwania firmy w opiece zdrowotnej
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>57</h1>
                    Miesięcy średnio przeżywają firmy z jedną placówką
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>33%</h1>
                    Firm przeżyło, mając tylko jedną placówkę
                </div>
                    </Col>
                </Row>
            </Container>
        </section>);
}