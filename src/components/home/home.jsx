import React from 'react';
import { CeidgHeader } from './ceidg-header/ceidg-header';
import { CeidgFacts } from './ceidg-facts/ceidg-facts';
import { Container, Row } from 'react-bootstrap';

export function Home() {
    return (
        <React.Fragment>
            <CeidgHeader></CeidgHeader>
            <CeidgFacts></CeidgFacts>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}