import React, { useState, useEffect, useContext } from "react";
import { SurvivalDataContext } from '../../../App';
import { readPolandData, readMedian } from "./poland-data-reader";
import { PolandMap } from './polandMap';
import { Row, Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';


export const PolandMapContainer = () => {
    const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [medians, setMedians] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const survivalData = useContext(SurvivalDataContext);
    useEffect(() => {
        setData(readPolandData(survivalData));
        setMedians(readMedian(survivalData));
    }, [survivalData]);

    return (<div style={{textAlign: 'center', margin: '20px auto'}}>
        {
            data && data.length ? (<div>
                <h1>Przeanalizuj, gdzie umieścić swoją firmę</h1>
                    Najwięcej miesięcy przeżywają firmy z województwa mazowieckiego, najkrócej z kujawsko-pomorskiego i warmińsko-mazurskiego
                <Row>
                <Col xs={5}>
                    <PolandMap data={data} medians={medians}></PolandMap>
                </Col>
            </Row>
            </div>) :
            <Spinner animation="border" role="status" variant="success">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    </div>);;

    return (
    <div>
        
    </div>)
};

