import React, { useEffect, useState, useContext } from 'react';
import { SurvivalDataContext } from '../../../App';
import { readShareHolderData } from './durationByShareholder-data-reader';
import { CustomHistogram } from '../customHistogram/customHistogram';

export function Shareholder({formData}) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readShareHolderData(survivalData, formData.isShareholder, formData.monthsPerBin));
    }, [survivalData, formData]);

    return (
        <CustomHistogram data={histogramData} xAxisKey="months" yAxisKey="count"></CustomHistogram>
    );
}