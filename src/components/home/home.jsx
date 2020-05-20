import React from 'react';
import { CeidgHeader } from './ceidg-header/ceidg-header';
import { CeidgFacts } from './ceidg-facts/ceidg-facts';
import { Container, Row, Col } from 'react-bootstrap';
import { ShareholderController } from '../graphs/durationByShareholder/shareholderController';
import { VoivodeshipController } from '../graphs/correctVoivodeship/voivodeshipController';
import { PlacesController } from '../graphs/numOfPlaces/placesController';
import { PanelPkd } from '../graphs/pkd/panelPkd';

import { LicencesController } from '../graphs/numOfLicences/licencesController';
import styles from './home.module.css';

export function Home() {
    return (
        <React.Fragment>
            <CeidgHeader></CeidgHeader>
            <CeidgFacts></CeidgFacts>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className={styles.graphContainer}>
                            <ShareholderController/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.graphContainer}>
                            <VoivodeshipController/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.graphContainer}>
                            <PlacesController/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.graphContainer}>
                            <LicencesController/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.graphContainer}>
                            <PanelPkd></PanelPkd>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}