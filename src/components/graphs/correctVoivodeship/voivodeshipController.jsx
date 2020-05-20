import React, {  useState } from 'react';
import { Voivodeship } from './voivodeship';
import { Form } from 'react-bootstrap';
import Slider from 'react-input-slider';

export function VoivodeshipController() {
    const controlsState = {
        isVoivodeshipCorrect: false,
        monthsPerBin: 1
    }
    const [controls, setControls] = useState(controlsState);

    const setVoivodeship = (event) => {
        setControls({ ...controls, isVoivodeshipCorrect: !controls.isVoivodeshipCorrect })
    }

    return (
        <div>
            <h1>Może lepiej wrócić do podstawówki?</h1>
            Firmy osób, które nie potrafią poprawnie wpisać województwa szybko upadają
            <Voivodeship
                isVoivodeshipCorrect={controls.isVoivodeshipCorrect}
                monthsPerBin={controls.monthsPerBin}
            />
            <Form>
                <Form.Group controlId="shareholder.isShareholder">
                    <Form.Check
                            type="switch"
                            id="voivodeship-switch"
                            label="Właściciel wpisał poprawnie województwo"
                            onChange={setVoivodeship}
                            checked={controls.isVoivodeshipCorrect}
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