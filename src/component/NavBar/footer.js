import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import link from '@mui/material/Link';
import { Typography, Box, Button, Fade } from '@mui/material';

const Footer = () => {
    return (
        <Box

            component={'footer'}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bottom: 0,
                left: 0,
                background: 'linear-gradient(to top, #0c0c0cff, #0a0c16bd)',
                color: '#fff',
                textAlign: 'left',
                py: 3,
                mt: 'auto',

            }}

        >
            <Typography variant='body2' sx={{
                fontFamily: 'monospace',
                fontSize: '1rem',
                fontWeight: '1rem',
                margin: '0.5rem',
            }}>
                © {new Date().getFullYear()} MB_softsen. All rights reserved. <br></br>
                Built with ❤️ using React & Material UI
            </Typography>

            <Box sx={{
                mt: '1'
            }}>
                <IconButton
                    variant = "h3"
                    component={link}
                    href="https://github.com/MBarre28"
                    color="inherit"
                    textAlign = 'right'
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover":{
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',

                        }
                    }}
                >
                    <GitHubIcon />
                </IconButton>

                <IconButton

                    component={link}
                    href="https://www.youtube.com/@softssen"
                    color="inherit"
                    textAlign = 'right'
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover":{
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',

                        }
                    }}
                >
                    <YouTubeIcon />
                </IconButton>

                <IconButton

                    component={link}
                    href="https://www.linkedin.com/in/muhammad-barre/"
                    color="inherit"
                    textAlign = "right"
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover":{
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',

                        }
                    }}
                >
                    <LinkedInIcon />

                </IconButton>

                <IconButton  
                component = {link}
                href=''
                color='inherit'
                textAlign = 'right'
                sx = {{
                    transition: 'linear 0.3s',
                    mt: 2,
                    ":hover":{
                        color: '#263cb8ff',
                        transform: 'scale(1.25)',
                    }
                }}
                
                > 
                <ContactMailIcon />                  
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer