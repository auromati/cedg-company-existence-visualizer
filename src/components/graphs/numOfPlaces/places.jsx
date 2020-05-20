import React, { useEffect, useState, useContext } from 'react';
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Brush
} from 'recharts';
import { SurvivalDataContext } from '../../../App';
import { readPlacesData } from './places-data-reader';
import { CustomLinear } from '../customLinear/customLinear';

const colors = {
    '1':'#66bb80',
    '2':'#3bb2ec',
    '3':'#5c8193',
    '4':'#542788',
    '5':'#67ff00',
    '6+':'#d13841'
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
        <CustomLinear data={histogramData} xAxisKey="month" groups={groups} colors={colors}></CustomLinear>
    );
}