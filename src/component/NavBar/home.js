import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Fade, Grid, Card, Tooltip, Container, useMediaQuery,  } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const techStack = [
  { name: 'HTML', logo: '/images/html.png', description: 'HTML' },
  { name: 'CSS', logo: '/images/css.png', description: 'CSS' },
  { name: 'Javascript', logo: '/images/javascript.png', description: 'Javascript' },
  { name: 'React', logo: '/images/react.png', description: 'React' },
  { name: 'Django', logo: '/images/django.png', description: 'Django' },
  { name: 'Laravel', logo: '/images/laravel.png', description: 'Laravel' },
  { name: 'Python', logo: '/images/python.png', description: 'Python' },
];

const HomePage = () => {
  const [checked, setChecked] = useState(false);
  const [open, isSetOpen] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #1a2a6c)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Intro text */}
          <Grid item xs={12} md={6} mt={12}>
            <Typography variant="h6" fontFamily="monospace" fontWeight="bold">
              <Typewriter
                words={['Hello, my name is']}
                loop={1}
                typeSpeed={50}
                delaySpeed={1000}
              />
            </Typography>

            <Fade in={checked} timeout={2000}>
              <Typography
                variant="h2"
                fontFamily="monospace"
                fontWeight="bold"
                sx={{ py: 2 }}
              >
                MB_softsen 😎
              </Typography>
            </Fade>

            <Typography
              fontFamily="monospace"
              maxWidth="500px"
              fontSize="18px"
            >
              Aspiring full-stack software developer and cybersecurity enthusiast. I have developed responsive projects and web applications. I teach programming to beginners on my YouTube channel.
            </Typography>

            <Fade in={checked} timeout={2000}>
              <Typography
                variant="h5"
                fontFamily="monospace"
                sx={{ py: 2 }}
              >
                Check out all my projects I have made. 🛠
              </Typography>
            </Fade>

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="outlined" size="large" href="/project" 
              sx = {{ transition: 'linear 0.3s', borderRadius: 8, "hover": {
              color: '#263cb8ff',
              transform: 'scale(1.25)',
              },
              }}>
                VIEW PROJECTS
              </Button>
              <Button variant="outlined" size="large" href="/contact"              
              sx = {{ transition: 'linear 0.3s', borderRadius: 8, "hover": {
              color: '#263cb8ff',
              transform: 'scale(1.25)',
              },
              }}>
                CONTACT ME
              </Button>
            </Box>
          </Grid>

          {/* Right side - Image */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/images/softsen.png"
              alt="softsen logo"
              sx={{
                maxWidth: '400px',
                width: { xs: "70%", sm: "60%", md: "100%" },
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Tech Stack Section */}
      <Box sx={{ py: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="monospace"
            align="center"
            gutterBottom
          >
            My Tech Stack 🛠
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {techStack.map((tech, index) => (
              <Grid item xs={4} sm={3} md={2} key={index}>
                <Tooltip title={tech.name} arrow>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 2,
                      objectFit: 'cover',
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 15px rgba(82,192,211,0.6)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={tech.logo}
                      alt={tech.name}
                      sx={{ width: '45px', height: '45px', mb: 1 }}
                    />
                    {tech.description}
                  </Card>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HomePage;
