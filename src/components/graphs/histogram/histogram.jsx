import React, { useEffect, useState, useContext } from 'react';
import { readHistogramData } from './histogram-data-reader';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { SurvivalDataContext } from '../../../App';

export function Histogram() {
    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
      setHistogramData(readHistogramData(survivalData));
    }, [survivalData]);
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
