import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search() {
  return (
    <Box>
      <Box>
        <Box my={5}>
        <Typography variant='h4' color='#000000'>
          Hello, how can we help you?
          </Typography>
        </Box>

    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
    >
         <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for answers"
        inputProps={{ 'aria-label': 'search' }}
      />
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}

    </Paper>
    </Box>
    </Box>
  );
}
