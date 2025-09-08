// src/components/Navbar.js
// NAVIGATION PAGE
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { color, spacing } from '@mui/system';

// const Search = styled('div')(({ theme }) => ({
//   position: 'fixed',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.black, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.blue, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position='fixed'
      elevation={'0'}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(30px)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
        <Toolbar>
          <Box 
          component={'img'}
          src='/images/softsen.png'
          alt='softsen logo'
          maxHeight={'50px'}
          display={'absolute'}
          > 

          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My portfolio
          </Typography>
          <Button color="inherit" href="/" sx={{
            fontSize: '1.25rem',
            fontFamily: 'monospace',
            mx: '1.5',
            fontWeight: 'bold',
            letterSpacing: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#43a7c5ff',
              textDecoration: 'underline',
              transform: 'scale(1.05)'

            },
          }}> 01. Home </Button> |
          <Button color="inherit" href="about" sx={{
            fontSize: '1.25rem',
            fontFamily: 'monospace',
            mx: '1.5',
            fontWeight: 'bold',
            letterSpacing: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#43a7c5ff',
              textDecoration: 'underline',
              transform: 'scale(1.05)'

            },
          }}>02. About </Button> |
          <Button color="inherit" href="project" sx={{
            fontSize: '1.25rem',
            fontFamily: 'monospace',
            mx: '1.5',
            fontWeight: 'bold',
            letterSpacing: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#43a7c5ff',
              textDecoration: 'underline',
              transform: 'scale(1.05)'

            },
          }}>03. projects </Button> |
          <Button color="inherit" href="contact" sx={{
            fontSize: '1.25rem',
            fontFamily: 'monospace',
            mx: '1.5',
            fontWeight: 'bold',
            letterSpacing: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#43a7c5ff',
              textDecoration: 'underline',
              transform: 'scale(1.05)'

            },
          }}>04. Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;