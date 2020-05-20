import React, { useEffect, useState, useContext } from 'react';
import { SurvivalDataContext } from '../../../App';
import { readLicencesData } from './licences-data-reader';
import { CustomLinear } from '../customLinear/customLinear';

const colors = {
    '0':'#66bb80',
    '1':'#3bb2ec',
    '2':'#5c8193',
    '3+':'#542788'
}

export function Licences({groups, monthsPerBin}) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readLicencesData(survivalData, monthsPerBin));
    }, [survivalData, monthsPerBin]);

    return (
        <CustomLinear data={histogramData} xAxisKey="month" groups={groups} colors={colors}></CustomLinear>
    );
}