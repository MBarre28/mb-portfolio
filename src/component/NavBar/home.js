// HOMEPAGE
import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Fade } from '@mui/material';
import { Home, Maximize, ZoomIn } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { motion, time } from 'framer-motion';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);

  }, []);

  
return (
  <Box
    flexDirection={{ xs: "column", md: "row" }}
    alignItems="center"
    justifyContent="space-between"
    gap={4}
    sx={{
      height: '100vh',
      background: 'linear-gradient(to bottom, #000000, #1a2a6c)',
      color: 'white',
      padding: 4,
      display: "flex",
    }}
  >
    {/* Left side: Text */}
    <Box flex="6" mb={2}>
      <Typography
        variant="h6"
        fontFamily="monospace"
        fontWeight="bold"
        paddingTop="10px"
        gutterBottom
      >
        <Typewriter
          words={['Hello, my name is']}
          loop={1}
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </Typography>

      <Fade in={checked} timeout={2000}>
        <Typography
          variant="h2"
          fontFamily="monospace"
          fontWeight="bold"
          padding="1rem 0"
          gutterBottom
        >
          MB_softsen 😎
        </Typography>
      </Fade>

      <Typography
        fontFamily="monospace"
        maxWidth="700px"
        fontSize="20px"
      >
        <Typewriter
          words={['Aspiring full-stack software developer and cybersecurity enthusiast. I have developed responsive projects and web applications. I teach programming to beginners on my YouTube channel. I have had a keen interest in technology and its evolution from a younger age.']}
          loop={1}
          typeSpeed={20}
          deleteSpeed={0}
          delaySpeed={1000}
          cursorStyle="__"
        />
      </Typography>

      <Fade in={checked} timeout={2000}>
        <Typography
          variant="h3"
          fontFamily="monospace"
          fontSize="25px"
          padding="1.5rem 0"
        >
          Check out all my projects I have made. 🛠
        </Typography>
      </Fade>

      <Button
        variant="outlined"
        size="large"
        href="/project"
        sx={{
          fontSize: { xs: '1rem', sm: '1.5rem' },
          mt: 2,
          transition: 'all 0.3s ease',
          ":hover": {
            color: '#263cb8ff',
            textDecoration: 'underline',
            transform: 'scale(1.25)',
            fontFamily: 'monospace',
          }
        }}
      >
        VIEW PROJECTS
      </Button>

            <Button
      variant='outlined'
      size = "large"
      href='/contact'
      sx = {{
        fontSize: { xs: '1rem', sm: '1.5rem' },
        mt: 2,
        ml: 2,
        transition: 'all 0.3s ease',
        ":hover": {
          color: '#263cb8ff',
          textDecoration: 'underline',
          transform: 'scale(1.25)',
          fontFamily: 'monospace',
        }
      }}
      > 
      contact me
      </Button>
    </Box> 

    {/* Right side: Image */}
    <Box
      component="img"
      src="/images/softsen.png"
      alt="softsen logo"
      sx={{
        maxWidth: '700px',
        width: { xs: "60%", sm: "50%", md: "40%" },
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        borderRadius: '10px',
      }}
    />
  </Box>
);

}

export default HomePage