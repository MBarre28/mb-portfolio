import React from 'react';
import { Typography, Box } from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';

const certification = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Box>
            <img src='images/goldmansachs.png' style={{ height: '60px'}}>
            </img>
            <img src='images/google.png' style={{ height: '60px', margin: 5}}>
            </img>
                <div style={{ Padding: '20px', color: '#ffff', fontFamily: 'monospace' }}>
                        <h2> Google - Foundations of Cybersecurity  </h2>
                        <p> <PlaceIcon sx={{ fontSize: 'small' }}> </PlaceIcon> Goldman Sachs, London | <CalendarTodayIcon sx={{ fontSize: 'small' }}></CalendarTodayIcon> <i> July 2025 </i> </p>
                        <ul style={{ color: '#ffff' }}>
                        <li> Company: Goldman Sachs under DFN Project SEARCH </li>
                        <li> Grade: pass </li>
                        </ul>
                        <img src='images/ibm.png' style={{ height: '60px'}}></img>
                        <h2> IBM Skillbuild </h2>
                        <p> <CalendarTodayIcon sx={{ fontSize: 'small' }}></CalendarTodayIcon> <i> May 2025 - August 2025 </i></p>
                        <ul style={{ color: '#ffff' }}>
                        <li> Web Development Fundamentals </li>
                        <li> Grade: pass </li>
                        </ul>
                    <div>

                    </div>
                </div>
            </Box>
        </motion.div>

    );
}

export default certification;