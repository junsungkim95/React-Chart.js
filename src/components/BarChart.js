import React from "react";
import { Bar } from "react-chartjs-2";
// 차트 안나타나는 오류 해결. "chart.js/auto"
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    // Bar의 속성으로 data와 options 사용 가능. 여기서 options 사용하지 않아서 생략
    return <Bar data={chartData} />;
}

export default BarChart;
