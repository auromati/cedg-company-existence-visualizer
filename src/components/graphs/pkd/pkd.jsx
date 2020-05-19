import React, { useEffect, useState, useContext } from 'react';
import {
    Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart
} from 'recharts';
import { SurvivalDataContext } from '../../../App';
import { readPkdData } from './pkd-data-reader';
import Spinner from 'react-bootstrap/Spinner';

export function Pkd({ selected }) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        const data = readPkdData(survivalData, selected.code);
        console.log(data);
        setHistogramData(data);
    }, [survivalData, selected]);
    return !histogramData.length ?
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner> : (<ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
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
                <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
        );
}
