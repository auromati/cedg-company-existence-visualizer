import React, { useEffect, useState, useContext } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { SurvivalDataContext } from '../../../App';
import { readPkdData } from './pkd-data-reader';

export function Pkd({ selected }) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        const section = selected.code.length === 1 ? selected.code.substring(0, 1) : null;
        const division = selected.code.length === 3 ? Number(selected.code.substring(1, 3)) : null;
        const group = selected.code.length === 4 ? Number(selected.code.substring(1, 4)) : null;
        const pkdClass = selected.code.length === 5 ? Number(selected.code.substring(1, 5)) : null;

        setHistogramData(readPkdData(survivalData, section, division, group, pkdClass));
    }, [survivalData, selected]);
    return (
        <BarChart
            width={500}
            height={300}
            data={histogramData}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="months" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    );
}
