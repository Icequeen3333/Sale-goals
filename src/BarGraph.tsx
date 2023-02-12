import React, {useState, createContext} from "react";
import DataProps from "./interfData"


import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell

} from 'recharts';


const BarGraph = (dataProp:DataProps) => {
    const [focusBar, setFocusBar] = useState < any | null > (null);

    return(< BarChart 
    width = {600}
    height = {300} 
    data = {dataProp.dataProp}
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
        </Bar> 
        < Tooltip cursor = {{fill: 'transparent'}}/>
    </BarChart >)


};
export default BarGraph;
