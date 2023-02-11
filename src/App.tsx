import TopGrid from './TopGrid';
import BarGraph from './BarGraph';
import {styled} from '@mui/material/styles';
const Div = styled('div')(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}));

function App() {


    return (
        <div>
            <Div>{'Objective Completions'}</Div>
            <TopGrid/>
            <BarGraph/>
        </div>
    )
}

export default App
