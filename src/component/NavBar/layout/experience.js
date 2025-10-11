import React from 'react';
import { Typography, Box } from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';

const experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
        >
        <Box> 
            <img src='images/goldmansachs.png' style={{ height: '60px', marginBlock: 3}}>
            </img>
            <img src='images/dfnprojectsearch.png' style={{height: '60px', margin: 4}}>
            </img>
            <div style = {{ color: '#ffff', fontFamily: 'monospace', maxWidth: '600px'}}>
            <h2> DFN Project SEARCH - Intern </h2>
            <p> <PlaceIcon sx={{ fontSize: 'small' }}> </PlaceIcon> Goldman Sachs, London | <CalendarTodayIcon sx={{ fontSize: 'small' }}> </CalendarTodayIcon> Sept 2024 - July 2025 </p>
            <h2> Legal Adminstration 3rd Rotation 💻 </h2>
            <p> <CalendarTodayIcon sx = {{fontSize: 'small'}}> </CalendarTodayIcon> Apr 2025 - June 2025 </p>
            <ul> 
                <li> Used GS Space to process locker allocations for 60+ secondees, ensuring secure access and operational readiness. </li>
                <li> Improved data accessibility for audit and retrieval by maintaining physical agreement logs in the Legal &amp; 
                Compliance Management System (LIMS). </li>
                <li> Conducted regular data checks in Excel to validate accuracy of secondee onboarding and offboarding records. </li>
            </ul>
            <h2> Engineering & Logistics 1st & 2nd Rotation ⚙ 👷🏾‍♂️ </h2>
            <p> <CalendarTodayIcon sx = {{fontSize: 'small'}}> </CalendarTodayIcon> Sept 2024 - Apr 2025 </p>
            <ul> 
                <li> Logged and resolved IT hardware incidents through helpdesk tickets, enhancing turnaround time for internal support. </li>
                <li> Imaged and configured over 10 enterprise PCs with Windows 10/11 for new starters, ensuring systems were operational on day one. </li>
                <li> Configured multiples of Jabra headsets using the Jabra direct app for support. </li>
            </ul>
            </div>
        </Box>
        </motion.div>
            
    

    );

}


export default experience;