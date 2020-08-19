import React from "react"
import { Line } from 'react-chartjs-2';

function LineChart(props) {

    console.log(JSON.stringify(props.dataTwo))
    return (<div><Line data={props.dataTwo}
        options={props.optionsTwo}
        options={{ maintainAspectRatio: true }}
    ></Line></div>)
};

export default LineChart