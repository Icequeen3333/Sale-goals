import TopGrid from './TopGrid';
import BarGraph from './BarGraph'
import DataProps from "./interfData"


import {styled} from '@mui/material/styles';
const Div = styled('div')(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}));

const Data = [
    {
        name: '1',
        uv: 600,
        pv: 2400,
        amt: 2400,
        time: 2,
        channel: 1,
        conversionTime: 2,
        propositions: 3
    }, {
        name: '3',
        uv: 50,
        pv: 2400,
        amt: 2400,
        time: 2,
        channel: 1,
        conversionTime: 2,
        propositions: 3
    },

];


const dataProps : DataProps= {
    dataProp : Data
}

function App() {
    return (<div>
        <Div> {'Objective Completions'}</Div>
        <TopGrid/>
        <BarGraph dataProp={dataProps.dataProp}/>
    </div>)
}

export default App
