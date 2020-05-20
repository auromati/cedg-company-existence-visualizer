import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush, ResponsiveContainer } from 'recharts';
import { Spinner } from 'react-bootstrap';

export function CustomHistogram({ data, xAxisKey, yAxisKey, yAxisKey2 }) {
    return (<div style={{textAlign: 'center', margin: '20px auto'}}>
        {
            data && data.length ? (
                <ResponsiveContainer width="100%" aspect={2}>
                    <BarChart data={data} margin={{bottom: 30, left: 30}}>
                        <XAxis dataKey={xAxisKey} stroke="#66bb80"
                        label={{ value: 'Czas przetrwania w miesiącach', position: 'insideBottom', offset: -80 }} />
                        <YAxis stroke="#66bb80" label={{ value: 'Liczba firm', angle: -90, position: 'insideLeft',offset: -20}} />
                        <Tooltip />
                        <Legend/>
                        <ReferenceLine y={0} stroke='#000' />
                        <Bar dataKey={yAxisKey2} stackId='a' fill="#3bb2ec" />
                        <Bar dataKey={yAxisKey} stackId='a' fill="#66bb80" />
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