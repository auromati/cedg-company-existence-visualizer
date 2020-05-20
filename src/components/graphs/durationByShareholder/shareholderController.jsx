import React, {  useState } from 'react';
import { Shareholder } from './shareholder';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function ShareholderController() {
    const controlsState = {
        isShareholder: true,
        monthsPerBin: 1
    }
    const [controls, setControls] = useState(controlsState);

    const setShareholder = (event) => {
        setControls({ ...controls, isShareholder: !controls.isShareholder })
    }

    return (
        <div>
            <h1>Doświadczenie ma znaczenie</h1>
            Osoby, które mają udziały w innych firmach, lepiej prowadzą biznes
            <Shareholder 
                formData={controls}
            />
                        <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Właściciel ma udziały w innych firmach"
                            onChange={setShareholder}
                            checked={controls.isShareholder}
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