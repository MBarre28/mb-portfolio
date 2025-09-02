import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { color, spacing } from '@mui/system';

const ContactPage = () => {
    return (
    <Box sx={{
        p: 4,
        minHeight: '100vh',
        background: "linear-gradient(to bottom, #000000, #1a2a6c)",
        color: '#ffff',
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
    > 
    <Typography variant="h1" gutterBottom> 
        Hello World 
    </Typography>
    <Typography gutterBottom> 
        This is my contact page list, testing purposes. 
    </Typography>

    </Box>
)}


export default ContactPage;