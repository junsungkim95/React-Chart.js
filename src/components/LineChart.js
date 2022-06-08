import React from "react";
import { Line } from "react-chartjs-2";
// 차트 안나타나는 오류 해결. "chart.js/auto"
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
    // Line의 속성으로 data와 options 사용 가능. 여기서 options 사용하지 않아서 생략
    return <Line data={chartData} />;
}

export default LineChart;
