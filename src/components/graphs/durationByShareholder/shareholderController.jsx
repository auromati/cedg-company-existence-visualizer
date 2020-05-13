import React, {  useState } from 'react';
import { Shareholder } from './shareholder';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function ShareholderController() {
    const controlsState = {
        isShareholder: true,
        monthsPerBin: 5
    }
    const [controls, setControls] = useState(controlsState);

    const setShareholder = (event) => {
        setControls({ ...controls, isShareholder: (event.target.value === 'true') })
    }

    return (
        <div>
            <h1>Doświadczenie ma znaczenie</h1>
            <h3>Osoby, które mają udziały w innych firmach, lepiej prowadzą biznes</h3>
            <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <Form.Label>Właściciel ma udziały w innej firmie</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Tak"
                        name="Tak"
                        value={true}
                        checked={controls.isShareholder}
                        id="shareholderYes"
                        onChange={setShareholder}
                    />
                    <Form.Check
                        type="radio"
                        label="Nie"
                        name="Nie"
                        value={false}
                        id="shareholderNo"
                        checked={!controls.isShareholder}
                        onChange={setShareholder}
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
            <Shareholder 
                isShareholder={controls.isShareholder}
                monthsPerBin={controls.monthsPerBin}
            />
        </div>
    );
}