import React, {  useState } from 'react';
import { Places } from './places';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function PlacesController() {
    const groupsState = {
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6+': true
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
            <h1>Więcej miejsc, większy sukces</h1>
            Firmy, które mają wiele placówek, utrzymują się na rynku dłużej
            <Places
                groups={groups}
                monthsPerBin={controls.monthsPerBin}
            />
            <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <p>Liczba placówek firmy:</p>
                    <Form.Check inline
                        type='checkbox'
                        label='1'
                        name='1'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check inline
                        type='checkbox'
                        label='2'
                        name='2'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check inline
                        type='checkbox'
                        label='3'
                        name='3'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check inline
                        type='checkbox'
                        label='4'
                        name='4'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check inline
                        type='checkbox'
                        label='5'
                        name='5'
                        defaultChecked="true"
                        onChange={setGroup}
                    />
                    <Form.Check inline
                        type='checkbox'
                        label='6+'
                        name='6+'
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
        </div>
    );
}