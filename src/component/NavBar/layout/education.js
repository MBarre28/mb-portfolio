import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';


const education = () => {
    return (
        <Box>
            <h2 gutterBottom style={{ color: '#ffff', fontFamily: 'monospace'}}> William Morris Sixth Form </h2>
            <p style={{ fontFamily: 'monospace' }}> <PlaceIcon sx={{ fontSize: 'small' }}> </PlaceIcon> London, England, United Kingdom |  <CalendarTodayIcon sx={{ fontSize: 'small' }}> </CalendarTodayIcon><i> Sept 2021 - July 2024 </i> </p>
            <ul>
                <li> Edexcel Level 2 IT Diploma – Distinction / Merit </li>
                <li> GCSE English Language AQA – Grade 5 </li>
                <li> Level 1 Media – Distinction </li>
                <li> Level 1 Art – Merit </li>
            </ul>
            <h2 style={{ color: '#ffff', fontFamily: 'monospace'}}> Fulham Cross Academy </h2>
            <p style={{ fontFamily: 'monospace'}}> <PlaceIcon sx={{ fontSize: 'small' }}> </PlaceIcon>  London, England, United Kingdom | <CalendarTodayIcon sx={{ fontSize: 'small' }}> </CalendarTodayIcon> <i> Sept 2019 - July 2021 </i> </p>
            <ul>
                <li> GCSE Mathematics - Grade 5 </li>
            </ul>
        </Box>
    );
}

export default education;