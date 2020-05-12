import React, { useEffect, useState, useContext } from 'react';
import { Pkd } from './pkd';
import { Form } from 'react-bootstrap';

const renderOptions = (options) => {
    return options.map((value) => {
        return <option>{value}</option>;
    });
};

export function PanelPkd() {
    const state = {
        sections: ["M", "F", "Q"],
        divisions: ["A", "B"],
        groups: ["A", "B"],
        classes: ["A", "B"],
    }
    const [pkds, setPkds] = useState(state);
    const selectedState = {
        section: null,
        division: null,
        group: null,
        classe: null
    }
    const [selected, setSelected] = useState(selectedState);

    const setSection = (event) => {
        setSelected({ ...selectedState, section: event.target.value })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Section</Form.Label>
                    <Form.Control as="select" size="sm" custom onChange={setSection} >
                        {renderOptions(pkds.sections)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Division</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                        {renderOptions(pkds.divisions)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Group</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                        {renderOptions(pkds.groups)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>PKD Class</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                        {renderOptions(pkds.classes)}
                    </Form.Control>
                </Form.Group>
            </Form>
            <Pkd selected={selected}></Pkd>
        </div>
    );
}