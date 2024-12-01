
"use client"

import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

interface ChartCardProps {
    width?: number;
    height?: number;
    lineColor?: string;
    topColor?: string;
    bottomColor?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
    width = 800,
    height = 600,
    lineColor = '#2962FF',
    topColor = '#2962FF',
    bottomColor = 'rgba(41, 98, 255, 0.28)',
}) => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartInstance = useRef<IChartApi | null>(null);
    const seriesInstance = useRef<ISeriesApi<'Area'> | null>(null);

    // Example chart data
    const chartData = [{"time": "2024-11-03", "value": 2.6685}, {"time": "2024-11-04", "value": 2.6617275000000014}, {"time": "2024-11-05", "value": 2.6350166666666666}, {"time": "2024-11-06", "value": 2.6553291666666663}, {"time": "2024-11-07", "value": 2.6386904166666665}, {"time": "2024-11-08", "value": 2.662243}, {"time": "2024-11-09", "value": 2.65043}, {"time": "2024-11-10", "value": 2.660274166666667}, {"time": "2024-11-11", "value": 2.758715833333334}, {"time": "2024-11-12", "value": 2.7757700000000005}, {"time": "2024-11-13", "value": 2.6653470833333333}, {"time": "2024-11-14", "value": 2.548932499999999}, {"time": "2024-11-15", "value": 2.581127916666666}, {"time": "2024-11-16", "value": 2.476098333333334}, {"time": "2024-11-17", "value": 2.468530000000001}, {"time": "2024-11-18", "value": 2.5082758333333337}, {"time": "2024-11-19", "value": 2.5132137500000007}, {"time": "2024-11-20", "value": 2.4444200000000005}, {"time": "2024-11-21", "value": 2.480992083333334}, {"time": "2024-11-22", "value": 2.678134583333333}, {"time": "2024-11-23", "value": 2.6801399999999993}, {"time": "2024-11-24", "value": 2.651648333333333}, {"time": "2024-11-25", "value": 2.747972500000001}, {"time": "2024-11-26", "value": 2.70689625}, {"time": "2024-11-27", "value": 2.67541}, {"time": "2024-11-28", "value": 2.67541}, {"time": "2024-11-29", "value": 2.67541}, {"time": "2024-11-30", "value": 2.6757449999999996}, {"time": "2024-12-01", "value": 2.67541}];

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Create the chart
        chartInstance.current = createChart(chartContainerRef.current, {
            width,
            height,
            layout: {
                // backgroundColor: '#f4f6f9', // Light gray background for contrast
                textColor: 'white', // Darker text color
                // background: { color: '#d4cddb' },
                background: { color: 'transparent' },
            },
            grid: {
                vertLines: { color: '#e0e0e0' },
                horzLines: { color: '#e0e0e0' },
            },
        });

        const chartContainer = chartContainerRef.current;
        if (chartContainer) {
        chartContainer.style.background = 'linear-gradient(to bottom, #020024, #4f485e)';
        chartContainer.style.borderRadius = '10px'; // Add curved corners
        chartContainer.style.border = '2px solid #fff'; // Add a white border (change color as needed)
        chartContainer.style.overflow = 'hidden'; 
        }

        // Add an area series to the chart
        seriesInstance.current = chartInstance.current.addAreaSeries({
            lineColor,
            topColor,
            bottomColor,
        });

        // Set the data for the series
        seriesInstance.current.setData(chartData);
        chartInstance.current.timeScale().fitContent();

        // Cleanup chart on unmount
        return () => {
            chartInstance.current?.remove();
            chartInstance.current = null;
            seriesInstance.current = null;
        };
    }, [chartData, width, height, lineColor, topColor, bottomColor]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add some shadow for depth
                overflow: 'hidden',
            }}
        />
    );
};

export default ChartCard;
