import React, {  useState } from 'react';
import { Voivodeship } from './voivodeship';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function VoivodeshipController() {
    const controlsState = {
        isVoivodeshipCorrect: false,
        monthsPerBin: 5
    }
    const [controls, setControls] = useState(controlsState);

    const setVoivodeship = (event) => {
        setControls({ ...controls, isVoivodeshipCorrect: (event.target.value === 'true') })
    }

    return (
        <div>
            <h1>Może lepiej wrócić do podstawówki?</h1>
            <h3>Firmy osób, które nie potrafią poprawnie wpisać województwa szybko upadają</h3>
            <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <Form.Label>Właściciel wpisał poprawnie województwo</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Tak"
                        name="Tak"
                        value={true}
                        checked={controls.isVoivodeshipCorrect}
                        id="voivodeshipYes"
                        onChange={setVoivodeship}
                    />
                    <Form.Check
                        type="radio"
                        label="Nie"
                        name="Nie"
                        value={false}
                        id="shareholderNo"
                        checked={!controls.isVoivodeshipCorrect}
                        onChange={setVoivodeship}
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
            <Voivodeship
                isVoivodeshipCorrect={controls.isVoivodeshipCorrect}
                monthsPerBin={controls.monthsPerBin}
            />
        </div>
    );
}