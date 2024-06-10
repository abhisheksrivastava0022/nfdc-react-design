import React from 'react';
import Logo from '../component/Logo';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const LeftBar = ({ value, onChange }) => {
    console.log('Tab changed:', value); 
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        onChange(event, newValue); // Call the onChange function provided by the parent component
    };

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '10px' }}>
                <Logo /> {/* Render the logo component */}
            </div>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange} // Use the local handleChange function
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Indian Panorama" {...a11yProps(0)} />
                <Tab label="OTT" {...a11yProps(1)} />
                <Tab label="CMOT" {...a11yProps(2)} />
            </Tabs>
            <div className='log_out_btn' style={{ padding: '10px' }}>
                <Button variant="outlined" startIcon={<LogoutIcon />} style={{ color: 'white', border: 'none' }}>
                    Logout {/* Logout button with icon */}
                </Button>
            </div>
        </div>
    );
};

export default LeftBar;
