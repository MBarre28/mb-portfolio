import { React, useState } from 'react';
import { Typography, Button, Box, Fade, Grid, useMediaQuery, Tab, Tabs } from "@mui/material";
import { styled, alpha, duration } from '@mui/material/styles';
import { color, display, flex, height, margin, maxWidth, spacing, useTheme, width } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Card, Tooltip } from '@mui/material';
import { Margin } from "@mui/icons-material";
import { lightGreen } from '@mui/material/colors';
import AboutTabs from './layout/aboutabs';




const About = () => {
    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(min-width:200px)');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box
            flex="1"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ xs: "column" }}
            display={'flex'}
            px='8'
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #000000, #1a2a6c)',
                color: '#fff',
                p: 4,
                pt: 12,
                justifyContent: "space-between",
                gap: 6,
            }} >


            {/* Left Section inc Image and icons */}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Box

                    component='img'
                    src='/images/graduation.png'
                    alt='profile'
                    display={'flex'}
                    sx={{
                        width: { xs: "180px", md: "250px" },
                        height: { xs: "180px", md: "250px" },
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: "0 0 25px rgba(185, 197, 255, 1)",
                        p: { xs: 2, md: 2 },
                        animation: "pulseGlow 3s infinite ease-in-out",
                        mb: 3,
                        maxWidth: '700px',
                    }}

                />

                {/* Social Section */}
                <IconButton

                    component={Link}
                    href="https://www.linkedin.com/in/muhammad-barre/"
                    color="inherit"
                    textAlign="right"
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover": {
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',
                            gap: 2,

                        }
                    }}
                >
                    <LinkedInIcon />

                </IconButton>
                <IconButton
                    variant="h3"
                    component={Link}
                    href="https://github.com/MBarre28"
                    color="inherit"
                    textAlign='right'
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover": {
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',

                        }
                    }}
                >
                    <GitHubIcon />

                </IconButton>

                <IconButton

                    component={Link}
                    href="https://www.youtube.com/@softssen"
                    color="inherit"
                    textAlign='right'
                    centered = {!isMobile}
                    sx={{
                        transition: 'linear 0.3s',
                        mt: 2,
                        ":hover": {
                            color: '#263cb8ff',
                            transform: 'scale(1.25)',

                        }
                    }}
                >
                    <YouTubeIcon />

                </IconButton>
                <Typography variant="h3" fontSize={'14px'} fontFamily={'monospace'} alignItems={'center'} sx={{ opacity: '0.9' }} gutterBottom>
                    About Me
                </Typography>
                <Typography varient="h6" fontSize={'20px'} fontFamily={'monospace'} fontWeight={'bold'} mt={'1'}> MY JOURNEY </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, y: 0 }}
            >

                {/* Right hand section */}
                <Box
                    sx={{
                        mb: '1rem',
                        p: { xs: 2, md: 2 },
                    }}


                >
                    <Fade in={'checked'} timeout={2000}>
                        <Typography
                            fontWeight='bold'
                            fontSize={'30px'}
                            fontFamily={'monospace'}
                        >

                            Hi, my real name is Muhammad Barre 👋
                        </Typography>
                    </Fade>
                    <Typography
                        variant="h6"
                        maxWidth={'700px'}
                        fontSize={'18px'}
                        fontFamily={'monospace'}
                    >
                        I am aspiring developer and I help tech feel rich and popular. I am currently an intern graduate at Goldman Sachs who finds energy working in a tech industry for software development and cybersecurity.
                    </Typography>
                    <br></br>
                    <Typography
                        variant="h6"
                        maxWidth={'700px'}
                        fontSize={'18px'}
                        fontFamily={'monospace'}
                    >
                        My expertise in programming has shaped my creation into building e-commerce website and e-portfolio, applying frameworks including Laravel, Django and now React JS.
                    </Typography>
                    <br></br>
                    <Typography
                        variant="h6"
                        maxWidth={'700px'}
                        fontSize={'18px'}
                        fontFamily={'monospace'}
                    >
                        Beyond Programming, my growing interest of cybersecurity keeps me tuned on how senstive data is protected against malicious warnings. I use my security knowledge not only protect data, to increase the hierarchy of the tech industry.
                    </Typography>
                    <br></br>
                    <Typography
                        variant="h6"
                        maxWidth={'700px'}
                        fontSize={'18px'}
                        fontFamily={'monospace'}
                    >

                        Not only I build, I teach programming and it's fundamentals for front-end and back-end systems for beginners and grow a social network on my Youtube channel.
                    </Typography>
                </Box>
            </motion.div>

            {/* SMALL EXTRA TABS */}
            <div>
            <AboutTabs />
            </div>

                {/* Tab Panels */}



            {/* CONTACT BOX */}

            <Box mt={8} display={'flex'}>
                <Card sx={{
                    background: 'rgba(17, 8, 8, 0)',
                    color: '#ffff',
                    padding: '10px',
                    border: '2px solid #ffff',
                    boxShadow: '0 2px 8px rgba(55, 52, 224, 0.3)',
                }}>
                    <Typography variant="h2"
                        fontWeight={'bold'}
                        fontFamily={'monospace'}
                        fontSize={'30px'}
                    >
                        Contact me for business enquiries.
                    </Typography>
                    <Button fontFamily={'monospace'} component={Link} href="/contact" sx={{
                        color: '#ffff',
                        textTransform: 'lowercase',
                        ":hover": {
                            color: '#263cb8ff',
                            textDecoration: 'underline',
                            transform: 'scale(1.05)',

                        }
                    }}>

                        <Typography variant="paragraph"
                            fontWeight={'bold'}
                            fontFamily={'monospace'}
                            fontSize={'15px'}
                            align="center"
                        >
                            <br></br>
                            Click here to contact ={">"}
                        </Typography>
                    </Button>
                </Card>
            </Box>
            </Box>
    );
};



export default About;