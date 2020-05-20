import React, {  useState } from 'react';
import { Licences } from './licences';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function LicencesController() {
    const groupsState = {
        '0': true,
        '1': true,
        '2': true,
        '3+': true
    }
    const [groups, setGroups] = useState(groupsState);
    const setGroup = (event) => {
        setGroups({ ...groups, [event.target.name]: event.target.checked  });
    };

    const controlsState = {
        monthsPerBin: 5
    }
    const [controls, setControls] = useState(controlsState);

    return (
        <div>
            <h1>Licencje drogą do sukcesu</h1>
            <h3>Firmy, które mają wiele licencji, utrzymują się dłużej</h3>
            <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <Form.Label>Liczba licencji firmy</Form.Label>
                    <Form.Check
                        type='checkbox'
                        label='0'
                        name='0'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check
                        type='checkbox'
                        label='1'
                        name='1'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check
                        type='checkbox'
                        label='2'
                        name='2'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check
                        type='checkbox'
                        label='3+'
                        name='3+'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                </Form.Group>
                <Form.Group controlId="shareHolder.monthsPerBin">
                    <Form.Label>Grupuj co {controls.monthsPerBin} miesiące</Form.Label>
                    <Slider axis="x"
                        x={controls.monthsPerBin} 
                        xmin={1}
                        xmax={20}
                        onChange={({x}) => {setControls({...controls, monthsPerBin: x})}}   
                    />
                </Form.Group>
            </Form>
            <Licences
                groups={groups}
                monthsPerBin={controls.monthsPerBin}
            />
        </div>
    );
}