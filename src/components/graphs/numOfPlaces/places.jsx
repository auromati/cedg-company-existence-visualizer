import React, { useEffect, useState, useContext } from 'react';
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Brush
} from 'recharts';
import { SurvivalDataContext } from '../../../App';
import { readPlacesData } from './places-data-reader';

const colors = {
    '1':'#b35806',
    '2':'#f1a340',
    '3':'#fee0b6',
    '4':'#d8daeb',
    '5':'#998ec3',
    '6+':'#542788'
}

const renderLines = (groups) => {
    return Object.keys(groups).map((value) => {
        if(groups[value]) {
            return <Line type="monotone" dataKey={value} stroke={colors[value]} />;
        } else {
            return;
        }
    });
};

export function Places({groups, monthsPerBin}) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readPlacesData(survivalData, monthsPerBin));
    }, [survivalData, monthsPerBin]);

    return (
        <LineChart
            width={500}
            height={300}
            data={histogramData}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {renderLines(groups)}
            <Brush dataKey='month' height={30} stroke="#8884d8"/>
        </LineChart>
    );
}