import React from "react"
import {Bar} from 'react-chartjs-2';

function BarCharts(props) {

    console.log(JSON.stringify(props.dataOne))
    return (<div><Bar data={props.dataOne}
        options={props.optionsOne}
       ></Bar></div>)
};

export default BarCharts