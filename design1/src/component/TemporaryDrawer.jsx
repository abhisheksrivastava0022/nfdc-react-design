// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LeftBar from './LeftBar';

// const TemporaryDrawer = ({ value, onChange }) => {
const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0); // State for tab value

  const handleDrawerToggle = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setOpen(false);
    // console.log('Tab changed:', newValue); // Debugging
  };
  // console.log("TemporaryDrawer", value);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle(false)}>
      <LeftBar value={value} onChange={handleTabChange} /> {/* Pass value and handleChange to LeftBar */}
    </Box>
  );

  // console.log('Drawer rendered with value:', value); // Debugging

  return (
    <div>
      <Button onClick={handleDrawerToggle(true)}><MenuRoundedIcon /></Button>
      <Drawer open={open} onClose={handleDrawerToggle(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default TemporaryDrawer