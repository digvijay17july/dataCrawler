import React from "react"
import {Bar} from 'react-chartjs-2';

function BarChart(props) {

    console.log(JSON.stringify(props.dataOne))
    return (<div><Bar data={props.dataOne}
        options={props.optionsOne}
        options={{ maintainAspectRatio: true }}
       ></Bar></div>)
};

export default BarChart