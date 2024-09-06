import React,{useState} from "react";
import { Bar, Doughnut, Line} from "react-chartjs-2"
import { Chart } from 'react-chartjs-2'
import "chart.js/auto"

import revenueData from "../data/revenueData.json"
import sourceData from "../data/sourceData.json"

const LineChartType2 = () => {

    const [data, SetData] = useState(revenueData);

    const setMenuValue = (props) => {
      let newArr = [...data];
      newArr.pop(0);
      newArr.push(props)
      SetData(newArr);
    }

    const test = {
      "label" : "test",
      "revenue" : 3000,
      "cost" : 30000
    }
    

    // const sid = setInterval(() => {
    //   const test = {
    //     "label" : "test",
    //     "revenue" : Math.floor(Math.random()*100000),
    //     "cost" : Math.floor(Math.random()*100000)
    //   }
    //   setMenuValue(test);
    //   console.log(data)
    // }, 1000);
    

    return (
        <div className="chart w-[1556px] m-auto">
      <div className="dataCard revenueCard h-52">
        <Line
          data={{
            labels: data.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: data.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: data.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
        //   width={"500%"}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
    </div>
    )
}

export default LineChartType2