import React from "react";
import { Pie } from "react-chartjs-2";
// 차트 안나타나는 오류 해결. "chart.js/auto"
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
    // Pie의 속성으로 data와 options 사용 가능. 여기서 options 사용하지 않아서 생략
    return <Pie data={chartData} />;
}

export default PieChart;
