import React from 'react';
import { Typography, Box } from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';

const certification = () => {
    return (
        <Box>
        <div style={{Padding: '20px', color: '#ffff', fontFamily: 'monospace'}}>
            <ul style={{ color: '#ffff'}}>
            <h2> Google - Foundations of Cybersecurity  </h2>
            <p> <CalendarTodayIcon sx={{ fontSize: 'small' }}></CalendarTodayIcon> <i> July 2025 </i> </p>
             <p> Company: Goldman Sachs under DFN Project SEARCH </p>
             <p> Grade: pass </p>
            <h2> IBM Skillbuild </h2>
            <p> <CalendarTodayIcon sx={{ fontSize: 'small' }}></CalendarTodayIcon> <i> May 2025 - August 2025 </i> </p>
            <p> Web Development Fundamentals </p>
            <p> Grade: pass </p>
        </ul>
        <div> 

        </div>
        </div>
        </Box>
        
    );
}

export default certification;