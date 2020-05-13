import React, { useEffect, useState, useContext } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
    Brush
} from 'recharts';
import { SurvivalDataContext } from '../../../App';
import { readShareHolderData } from './durationByShareholder-data-reader';

export function Shareholder({isShareholder, monthsPerBin}) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readShareHolderData(survivalData, isShareholder, monthsPerBin));
    }, [survivalData, isShareholder, monthsPerBin]);

    return (
        <BarChart width={600} height={300} data={histogramData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="months"/>
            <YAxis/>
            <Tooltip/>
            <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
            <ReferenceLine y={0} stroke='#000'/>
            <Brush dataKey='months' height={30} stroke="#8884d8"/>
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    );
}