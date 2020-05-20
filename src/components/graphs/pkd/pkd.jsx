import React, { useEffect, useState, useContext } from 'react';

import { SurvivalDataContext } from '../../../App';
import { readPkdData } from './pkd-data-reader';
import { CustomHistogram } from '../customHistogram/customHistogram';

export function Pkd({ selected }) {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        const data = readPkdData(survivalData, selected.code);
        setHistogramData(data);
    }, [survivalData, selected]);
    return(<CustomHistogram data={histogramData} xAxisKey="months" yAxisKey="Upadły" yAxisKey2="Przetrwały"></CustomHistogram>
        );
}
