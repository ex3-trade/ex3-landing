
"use client"

import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

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
    const chartData = [{"time": "2024-11-03", "value": 2.6685}, {"time": "2024-11-04", "value": 2.6617275000000014}, {"time": "2024-11-05", "value": 2.6350166666666666}, {"time": "2024-11-06", "value": 2.6553291666666663}, {"time": "2024-11-07", "value": 2.6386904166666665}, {"time": "2024-11-08", "value": 2.662243}, {"time": "2024-11-09", "value": 2.65043}, {"time": "2024-11-10", "value": 2.660274166666667}, {"time": "2024-11-11", "value": 2.758715833333334}, {"time": "2024-11-12", "value": 2.7757700000000005}, {"time": "2024-11-13", "value": 2.6653470833333333}, {"time": "2024-11-14", "value": 2.548932499999999}, {"time": "2024-11-15", "value": 2.581127916666666}, {"time": "2024-11-16", "value": 2.476098333333334}, {"time": "2024-11-17", "value": 2.468530000000001}, {"time": "2024-11-18", "value": 2.5082758333333337}, {"time": "2024-11-19", "value": 2.5132137500000007}, {"time": "2024-11-20", "value": 2.4444200000000005}, {"time": "2024-11-21", "value": 2.480992083333334}, {"time": "2024-11-22", "value": 2.678134583333333}, {"time": "2024-11-23", "value": 2.6801399999999993}, {"time": "2024-11-24", "value": 2.651648333333333}, {"time": "2024-11-25", "value": 2.747972500000001}, {"time": "2024-11-26", "value": 2.70689625}, {"time": "2024-11-27", "value": 2.67541}, {"time": "2024-11-28", "value": 2.67541}, {"time": "2024-11-29", "value": 2.67541}, {"time": "2024-11-30", "value": 2.6757449999999996}, {"time": "2024-12-01", "value": 2.67541}];

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Dynamically determine chart size
        const isMobile = window.innerWidth < 768;
        const chartWidth = isMobile ? window.innerWidth - 40 : width;
        const chartHeight = isMobile ? 300 : height;

        const chart = createChart(chartContainerRef.current, {
            width: chartWidth,
            height: chartHeight,
            layout: {
                textColor: 'white',
                background: { color: 'transparent' },
            },
            grid: {
                vertLines: { color: '#e0e0e0' },
                horzLines: { color: '#e0e0e0' },
            },
        });

        chartContainerRef.current.style.border = '2px solid #fff';
        chartContainerRef.current.style.borderRadius = '10px';

        const series = chart.addAreaSeries({
            lineColor,
            topColor,
            bottomColor,
        });

        series.setData(chartData);
        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, [width, height, lineColor, topColor, bottomColor]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        />
    );
};

export default ChartCard;
