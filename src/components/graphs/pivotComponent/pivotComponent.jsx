import React, { useContext, useState, useEffect } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import { SurvivalDataContext } from '../../../App';
import { readData } from './pivot-data-reader';

// create Plotly React component via dependency injection
const Plot = createPlotlyComponent(window.Plotly);

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats


export function PivotComponent() {
    const [controls, setControls] = useState([]);

    const survivalData = useContext(SurvivalDataContext);
    const [histogramData, setHistogramData] = useState([]);
    useEffect(() => {
        setHistogramData(readData(survivalData));
    }, [survivalData]);

    return (
        <PivotTableUI
            cols={['DurationOfExistenceInMonths']}
            rows={['ShareholderInOtherCompanies']}
            vals={['DurationOfExistenceInMonths']}
            rendererName={'Line Chart'}
            data={histogramData}
            onChange={s => setControls(s)}
            renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
            {...controls}
        />
    );
}