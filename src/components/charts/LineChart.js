import React from "react"
import {Line} from 'react-chartjs-2';
function LineCharts(props) {

    console.log(JSON.stringify(props.dataTwo))
    return (<Line data={props.dataTwo}
        options={props.optionsTwo}
      ></Line>)
};

export default LineCharts