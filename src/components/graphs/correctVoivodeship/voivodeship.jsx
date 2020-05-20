import React, { useEffect, useState, useContext } from 'react';
import { CustomHistogram } from '../customHistogram/customHistogram';
import { SurvivalDataContext } from '../../../App';
import { readVoivodeshipData } from './correctVoivodeship-data-reader';

export function Voivodeship({isVoivodeshipCorrect, monthsPerBin}) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readVoivodeshipData(survivalData, isVoivodeshipCorrect, monthsPerBin));
    }, [survivalData, isVoivodeshipCorrect, monthsPerBin]);

    return (
        <CustomHistogram data={histogramData} xAxisKey="months" yAxisKey="count"></CustomHistogram>
    );
}