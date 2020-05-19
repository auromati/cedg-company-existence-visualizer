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
                            <h1>90%</h1>
                    Fakt 1
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>90%</h1>
                    Fakt 2
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>90%</h1>
                    Fakt 3
                </div>
                    </Col>
                    <Col>
                        <div className={styles.ceidgFact}>
                            <h1>90%</h1>
                    Fakt 4
                </div>
                    </Col>
                </Row>
            </Container>
        </section>);
}