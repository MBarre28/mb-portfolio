import React from "react";
import { Typography, Button, Box, Container, Link } from "@mui/material";
import { motion } from 'framer-motion';
import { styled, alpha } from '@mui/material/styles';
import { color, Grid, spacing } from '@mui/system';
import { Typewriter } from "react-simple-typewriter";
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';


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
    <Container sx = {{textAlign: 'center', margin: 4}}> 
    <Typography variant="h3" sx={{  mb: 3, fontFamily: 'monospace', fontWeight: 'bold', mt: 4,}}
    
    > 
    <Typewriter
    words={['Get in Touch 💬 ']}
    loop={false}
    typeSpeed={20}
    delaySpeed={1000}
    
    />
    </Typography>
    <Typography varient="h1" sx = {{mb: 4, fontSize: '20px'}}gutterBottom> 
        Feel free to contact me through any of the platform below, I am here to support. 
    </Typography>
    </Container>
    </Box>
)}


export default ContactPage;