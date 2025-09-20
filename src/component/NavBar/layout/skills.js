import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
        >
        <Box> 
        <div style = {{ color: '#ffff', fontFamily: 'monospace', maxWidth: '600px'}}>
            <h2> Programming & web development 🛠 </h2>
            <ul style={{ textDecoration: 'none'}}> 
                <li> Python </li>
                <li> Javascript </li>
                <li> PHP </li>
                <li> CSS </li>
                <li> Django </li>
                <li> Laravel </li>
                <li> React </li>
                <li> APIs </li>
            </ul>

        </div>

        </Box>
        </motion.div>
    )

}


export default skills;