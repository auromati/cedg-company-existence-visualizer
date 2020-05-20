import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Brush, ResponsiveContainer, ReferenceLine
} from 'recharts';

const renderLines = (groups, colors) => {
    return Object.keys(groups).map((value) => {
        if(groups[value]) {
            return <Line type="monotone" dataKey={value} stroke={colors[value]} />;
        } else {
            return;
        }
    });
};

export function CustomLinear({ data, xAxisKey, groups, colors }) {
    return (<div style={{textAlign: 'center', margin: '20px auto'}}>
        {
            data && data.length ? (
                <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart data={data} margin={{left: 15, bottom: 30, right: 5}}>
                        <CartesianGrid strokeDasharray="2 4" />
                        <XAxis dataKey={xAxisKey} stroke="#66bb80"
                        label={{ value: 'Czas przetrwania w miesiącach', position: 'insideBottom', offset: -50 }} />
                        <YAxis stroke="#66bb80" label={{ value: 'Procent wszystkich firm', angle: -90, position: 'insideBottomLeft', offset: 5 }} />
                        <Tooltip />
                        <ReferenceLine y={0} stroke='#000' />
                        <Legend verticalAlign="top"/>
                        {renderLines(groups, colors)}
                        <Brush dataKey={xAxisKey} height={30} stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            ) :
            <Spinner animation="border" role="status" variant="success">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    </div>);;
}