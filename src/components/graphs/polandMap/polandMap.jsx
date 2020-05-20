import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/poland/poland-provinces.json";



export const PolandMap = ({data, medians}) => {
    const max = data.reduce((prev, curr) => curr > prev ? curr : prev, 0);
    const min = data.reduce((prev, curr) => curr < prev ? curr : prev, 100);
    const scaled = data.map(val => (val - min) / (max - min) * 10);
    
    const colorScale = scaleLinear()
        .domain([0, 10])
        .range([
            "#3bb2ec",
            "#47e929",
        ]);
    return (
        <ComposableMap projectionConfig={{ center: [19, 51.75], scale: 6000 }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <React.Fragment> {
                        geographies.map(geo => {
                            const cur = scaled ? scaled[geo.properties.ID_1 - 1] : 0;
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={colorScale(cur)}
                                >
                                </Geography>
                            );
                        })
                    }
                        {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            centroid[1] = centroid[1] + 0.3;
                            const cur = data ? data[geo.properties.ID_1 - 1] : 0;
                            const median = medians ? medians[geo.properties.ID_1 - 1] : 0;
                            return (
                                <g key={geo.rsmKey + "-name"}>
                                    <Marker coordinates={centroid}>
                                        <text y="2" fontSize={12} textAnchor="middle" fill="#fff">
                                            {isNaN(cur) ? (<tspan></tspan>) : (<React.Fragment>                                               
                                                <tspan x="0" dy="1.3em">Średnia: {Math.round(cur)}</tspan>
                                                <tspan x="0" dy="1.3em">Mediana: {Math.round(median)}</tspan></React.Fragment>)}

                                        </text>
                                    </Marker>
                                </g>
                            );
                        })}
                    </React.Fragment>)}
            </Geographies>
        </ComposableMap>
    );
};

