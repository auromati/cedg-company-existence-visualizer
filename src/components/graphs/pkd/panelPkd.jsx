import React, { useState } from 'react';
import { Pkd } from './pkd';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { pkdSections, pkdDivisions, pkdGroups, pkdClasses } from './dic';

const ALL = "All";

const renderOptions = (options) => {
    return options.map((value) => {
        return <option key={value}>{value}</option>;
    });
};

const getData = () => {
    return {
        allSections: JSON.parse(pkdSections),
        allDivisions: JSON.parse(pkdDivisions),
        allGroups: JSON.parse(pkdGroups),
        allClasses: JSON.parse(pkdClasses),
    }
}

const addAll = (arr) => {
    return [ALL, ...arr];
}

export function PanelPkd() {
    const initialState = getData();

    const pkdsState = {
        avSections: addAll(initialState.allSections),
        avDivisions: addAll(initialState.allDivisions),
        avGroups: addAll(initialState.allGroups),
        avClasses: addAll(initialState.allClasses),
        allSections: initialState.allSections,
        allDivisions: initialState.allDivisions,
        allGroups: initialState.allGroups,
        allClasses: initialState.allClasses
    }
    const [pkds, setPkds] = useState(pkdsState);

    const selectedState = {
        code: "",
        section: ALL,
        division: ALL,
        group: ALL,
        pkdClass: ALL
    }

    const [selected, setSelected] = useState(selectedState);

    const updatePkds = (code) => {
        const section = code.length >= 1 ? code.substring(0, 1) : "";
        const division = code.length >= 3 ? code.substring(0, 3) : ""
        const group = code.length >= 4 ? code.substring(0, 4) : "";
        const avDivisions = addAll(pkds.allDivisions.filter(s => s.startsWith(section)))
        const avGroups = addAll(pkds.allGroups.filter(s => s.startsWith(division)));
        const avClasses = addAll(pkds.allClasses.filter(s => s.startsWith(group)));

        setPkds({ ...pkds, avDivisions, avGroups, avClasses });
    }

    const shortenCode = (code, maxShortenCodeLength) => {
        let newCode = "";
        switch (code.length) {
            case 3:
                newCode = code.substring(0, 1);
                break;
            case 4:
                newCode = code.substring(0, 3);
                break;
            case 5:
                newCode = code.substring(0, 4);
                break;
        }
        return newCode.substring(0, maxShortenCodeLength);
    }

    const updateSelected = (code) => {
        const section = code.length >= 1 ? pkds.allSections.find(p => p.startsWith(code.substring(0, 1))) : ALL;
        const division = code.length >= 3 ? pkds.allDivisions.find(p => p.startsWith(code.substring(0, 3))) : ALL
        const group = code.length >= 4 ? pkds.allGroups.find(p => p.startsWith(code.substring(0, 4))) : ALL;
        const pkdClass = code.length >= 5 ? pkds.allClasses.find(p => p.startsWith(code.substring(0, 5))) : ALL;
        setSelected({ code, section, division, group, pkdClass });
    }

    const setValue = (event, maxShortenCodeLength) => {
        let code = "";
        if (event.target.value === ALL) {
            code = shortenCode(selected.code, maxShortenCodeLength);
        }
        else {
            code = event.target.value.split(" ")[0];
        }
        updateSelected(code);
        updatePkds(code);
    }


    return (<React.Fragment>
            <Row>
                <Col>
                <h1>Wybierz odpowiednią branżę</h1>
                <p style={{paddingBottom: "1rem"}}>Najlepszą przeżywalność mają opieka zdrowotna i pomoc społeczna, najgorszą - finanse.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form style={{fontSize: '0.8em'}}>
                    <Form.Row>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Sekcja PKD</Form.Label>
                        <Form.Control as="select" size="sm" custom value={selected.section} onChange={(event) => setValue(event, 0)} >
                            {renderOptions(pkds.avSections)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Dział PKD</Form.Label>
                        <Form.Control as="select" size="sm" custom value={selected.division} onChange={(event) => setValue(event, 1)}>
                            {renderOptions(pkds.avDivisions)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Grupa PKD</Form.Label>
                        <Form.Control as="select" size="sm" custom value={selected.group} onChange={(event) => setValue(event, 3)}>
                            {renderOptions(pkds.avGroups)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Klasa PKD</Form.Label>
                        <Form.Control as="select" size="sm" custom value={selected.pkdClass} onChange={(event) => setValue(event, 4)}>
                            {renderOptions(pkds.avClasses)}
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                </Form>
                </Col>
                <Col>
                    <Pkd selected={selected}></Pkd>
                </Col>
            </Row></React.Fragment>);
}