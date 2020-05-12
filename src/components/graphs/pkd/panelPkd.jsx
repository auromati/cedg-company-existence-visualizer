import React, { useState } from 'react';
import { Pkd } from './pkd';
import { Form } from 'react-bootstrap';

const ALL = "All";

const renderOptions = (options) => {
    return options.map((value) => {
        return <option>{value}</option>;
    });
};

const getData = () => {
    return {
        allSections: ["M - Opis"],
        allDivisions: ["M69 - Opis", "M70 - Opis"],
        allGroups: ["M691 - Opis", "M692 - Opis", "M701 - Opis", "M702 - Opis"],
        allClasses: ["M6910 - Opis", "M6920 - Opis", "M7010 - Opis", "M7021 - Opis", "M7022 - Opis"],
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
        const str = shortenCode(code, 4);
        const avDevisions = addAll(pkds.allDivisions.filter(s => s.startsWith(str)));
        const avGroups = addAll(pkds.allGroups.filter(s => s.startsWith(str)));
        const avClasses = addAll(pkds.allClasses.filter(s => s.startsWith(str)));

        setPkds({ ...pkds, avDevisions, avGroups, avClasses });
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

    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Section</Form.Label>
                    <Form.Control as="select" size="sm" custom value={selected.section} onChange={(event) => setValue(event, 0)} >
                        {renderOptions(pkds.avSections)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Division</Form.Label>
                    <Form.Control as="select" size="sm" custom value={selected.division} onChange={(event) => setValue(event, 1)}>
                        {renderOptions(pkds.avDivisions)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Group</Form.Label>
                    <Form.Control as="select" size="sm" custom value={selected.group} onChange={(event) => setValue(event, 3)}>
                        {renderOptions(pkds.avGroups)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Class</Form.Label>
                    <Form.Control as="select" size="sm" custom value={selected.pkdClass} onChange={(event) => setValue(event, 4)}>
                        {renderOptions(pkds.avClasses)}
                    </Form.Control>
                </Form.Group>
            </Form>
            <Pkd selected={selected}></Pkd>
        </div>
    );
}