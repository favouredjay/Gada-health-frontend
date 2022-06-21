import React from 'react'
import { Drawer, List, ListItemButton, Typography, ListItem, ListItemText, Box, CssBaseline, AppBar } from '@mui/material'
import { Link } from 'react-router-dom';

const drawerWidth = 400;

const items = [
    {
        text: 'Home',
        link: ''
    },
    {
        text: 'Branches',
        link: '/Facility/Dashboard/Branch'
    },
    {
        text: 'Employees',
        link: '/Facility/Dashboard/Employee'
    },
    {
        text: 'Profile',
        link: '/Facility/Dashboard/Profile'
    },
    {
        text: 'Log Out',
        link: ''
    }
];

const FacilityDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position='fixed'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                                                     
        </AppBar>
    
        <Drawer
            variant="permanent"
            anchor="left"
            >
                    
            <List direction="column" sx={{ width: '100%', maxHeight: '100%'}}>
            {
                items.map((text, index)=>(
                    <ListItem>
                        <ListItemButton component={ Link } to={text.link}>
                    <ListItemText primary={
                        <Typography color={'rgba(0,0,0,0.6)'} sx={{ fontWeight: '400px', fontSize: '14px' }}>
                            {text.text}
                        </Typography>
                    } disableTypography />
                  </ListItemButton>
                    </ListItem>
                ))}
            </List>
        
        </Drawer>
        
    </Box>

    
  )
}

export default FacilityDashboard