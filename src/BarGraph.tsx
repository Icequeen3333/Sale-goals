import React, {useState} from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell

} from 'recharts';
const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 2400,
        amt: 2400
    }, {
        name: 'Page B',
        uv: 400,
        pv: 2400,
        amt: 2400
    },

];


const BarGraph = () => {
    const [focusBar, setFocusBar] = useState < any | null > (null);

    return(< BarChart 
    width = {600}
    height = {300} 
    data = {data}
    onMouseMove = {
        (state) => {
            if (state.isTooltipActive) {
                setFocusBar(state.activeTooltipIndex);
            } else {
                setFocusBar(null);
            }
        }
    } > <XAxis dataKey="name"/>
    <YAxis/>
    <Bar dataKey="uv"
        barSize={30}>
        {

        data.map((entry, index) => (
            <Cell fill={focusBar === index ? "#014c56" : "#8fdee9"
            }/>
        ))
    }</Bar> < Tooltip cursor = {{fill: 'transparent'}}/>
    </BarChart >)


};
export default BarGraph;
