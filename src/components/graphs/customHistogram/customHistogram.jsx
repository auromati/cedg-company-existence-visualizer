import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush, ResponsiveContainer } from 'recharts';
import { Spinner } from 'react-bootstrap';

export function CustomHistogram({ data, xAxisKey, yAxisKey }) {
    return (<div style={{textAlign: 'center', margin: '20px auto'}}>
        {
            data && data.length ? (
                <ResponsiveContainer width="100%" aspect={2}>
                    <BarChart data={data} margin={{bottom: 30, left: 15}}>
                        <XAxis dataKey={xAxisKey} stroke="#66bb80"
                        label={{ value: 'Czas przetrwania w miesiącach', position: 'insideBottom', offset: -50 }} />
                        <YAxis stroke="#66bb80" label={{ value: 'Liczba firm', angle: -90, position: 'insideLeft', offset: -5 }} />
                        <Tooltip />
                        <ReferenceLine y={0} stroke='#000' />
                        <Bar dataKey={yAxisKey} fill="#66bb80" />
                        <Brush dataKey={xAxisKey} height={30} stroke="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            ) :
            <Spinner animation="border" role="status" variant="success">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    </div>);;
}