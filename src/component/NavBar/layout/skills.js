import React from 'react';
import { Typography, Box } from '@mui/material';


const skills = () => {
    return (
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
    )

}


export default skills;