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
            <img src='images/google.png' style={{ height: '60px', marginRight: 2}}>
            </img>
                <div style={{ Padding: '20px', color: '#ffff', fontFamily: 'monospace' }}>
                    <ul style={{ color: '#ffff' }}>
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
        </motion.div>

    );
}

export default certification;