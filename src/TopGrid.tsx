import { useState } from 'react'
import './App.css'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const TopGrid = () => {
  const [time, setTime] = useState('')

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };
  const [conversionTime, setConvTime] = useState('')

  const handleConvChange = (event: SelectChangeEvent) => {
    setConvTime(event.target.value as string);
  };

  const [propositions, setProps] = useState('')

  const handlePropsChange = (event: SelectChangeEvent) => {
    setProps(event.target.value as string);
  };

  const [channel, setChannel] = useState('')

  const handleChannelChange = (event: SelectChangeEvent) => {
    setChannel(event.target.value as string);
  };


  return (
      <Box >
        <Grid container spacing={5} wrap='nowrap' direction={"row"}>
          <Grid item xl={6} sm={6}>
            <FormControl fullWidth sx = {{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Time"
                onChange={handleTimeChange}

              > <MenuItem value={7}>Last 7 days</MenuItem>
                <MenuItem value={14}>Last 14 days</MenuItem>
                <MenuItem value={30}>Last 30 days</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl sm>
            <FormControl fullWidth sx = {{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Conversion Window</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={conversionTime}
                label="Conversion Window"
                onChange={handleConvChange}
              >
                <MenuItem value={5}>5 days</MenuItem>
                <MenuItem value={10}>10 days</MenuItem>
                <MenuItem value={30}>30 days</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl sm>
            <FormControl fullWidth sx = {{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Propositions</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={propositions}
                label="Propositions"
                onChange={handlePropsChange}
              >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Clicks</MenuItem>
                <MenuItem value={3}>Sales</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl sm>
            <FormControl fullWidth sx = {{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Channels</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={channel}
                label="Channels"
                onChange={handleChannelChange}
              >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Web</MenuItem>
                <MenuItem value={3}>Mobile</MenuItem>
                <MenuItem value={4}>Store</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
  )
}

export default TopGrid
