import "./App.css";
import { useState } from "react";
import { UserData } from "./Data";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";

function App() {
    // 훅으로 차트에 사용할 데이터샛 만들고 프롭으로 넘김
    const [userData, setUserData] = useState({
        // 각 데이터의 라벨 (필수1)
        labels: UserData.map((data) => data.year),
        // 각 라벨 당 데이터의 값(복수일 경우 라벨 내에서 데이터 복수 생성) (필수2)
        datasets: [
            {
                // label, data는 필수
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className="App">
            {/* 차트 크기는 wrapper로 감싸서 스타일 넣어주기 */}
            <div className="w-[700px] mx-auto my-10 px-20 py-10 bg-sky-200 border-4 border-indigo-500 rounded-xl">
                {/* 컴포넌트에서 사용하는 프롭 넘김 */}
                <BarChart chartData={userData} />
                <span className="font-semibold">Using Tailwind CSS</span>
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <PieChart chartData={userData} />
            </div>
            <div style={{ width: 700 }}>
                <DoughnutChart chartData={userData} />
            </div>
        </div>
    );
}

export default App;
