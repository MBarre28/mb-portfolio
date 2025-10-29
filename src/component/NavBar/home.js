import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Fade, Grid, Card, Tooltip, Container, useMediaQuery, useTheme, } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Divider from '@mui/material/Divider';

const techStack = [
  { name: 'HTML', logo: '/images/html.png', description: 'HTML' },
  { name: 'CSS', logo: '/images/css.png', description: 'CSS' },
  { name: 'Javascript', logo: '/images/javascript.png', description: 'Javascript' },
  { name: 'React', logo: '/images/react.png', description: 'React' },
  { name: 'Django', logo: '/images/django.png', description: 'Django' },
  { name: 'Laravel', logo: '/images/laravel.png', description: 'Laravel' },
  { name: 'Python', logo: '/images/python.png', description: 'Python' },
];

const featured_projects = [
  {
    image: "/images/portfolio24.png",
    title: "E-Portfolio Website 2024 edition",
    description: "built in using frameworks for backend including Laravel and MySQL. ",
    link: "https://github.com/MBarre28/MB_PortfolioDev",
  },
  {
    image: "/images/ecom.png",
    title: "E-commerce website",
    description: "Built in for django backend framework for e-com store.",
    link: "https://github.com/MBarre28/MB-ecommerce",
  },
]


const HomePage = () => {
  const [checked, setChecked] = useState(false);
  const [open, isSetOpen] = useState(false);
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleOpen = (featured_projects) => {
    setSelectedProject(featured_projects);
    isSetOpen(true);
  };

  const matches = useMediaQuery('(min-width:600px)');
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
          <Grid item xs={12} md={8} mt={12}>
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
                variant="h3"
                fontFamily="monospace"
                fontWeight="bold"
                sx={{ py: 2 }}
              >
                MB_softsen 😎
              </Typography>
            </Fade>

            <Typography
              fontFamily="monospace"
              maxWidth="700px"
              fontSize="18px"
            >
              Aspiring full-stack software developer and cybersecurity enthusiast. I have developed responsive projects and web applications. I teach programming to beginners on my YouTube channel.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="outlined" size="large" href="/contact"
                sx={{
                  transition: 'linear 0.3s', borderRadius: 8, "hover": {
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
            {!isMobile && (
              <Box
                component="img"
                src="/images/softsen.png"
                alt="softsen logo"
                variant={!isMobile ? 'image' : 'delete'}
                sx={{
                  maxWidth: '400px',
                  width: { xs: "70%", sm: "60%", md: "100%" },
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Tech Stack Section */}
      <Box sx={{ py: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>

          {/* Mobile responsiveness in home page */}

          <Typography

            fontWeight="bold"
            fontFamily="monospace"
            align="center"
            centered={!isMobile ? 'center' : 'h1'}

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
      <Fade in={checked} timeout={2000}>
        <Typography
          variant="h5"
          fontFamily="monospace"
          sx={{ py: 2, textAlign: 'center', marginTop: 5}}
        >
        Featured Projects. 🛠
        <Divider sx={{
                mb: 5,
                height: 2, // Makes the line thicker
                bgcolor: '#ffff', // Sets a custom background color
                border: 'none', // Removes default border properties
                outlineStyle: 'initial',
                display: 'flex',
                justifyContent: 'middle',
                margin: 5
        }}>
        </Divider>
        </Typography>
      </Fade>
      <Grid container gap={4} rowSpacing={2} display={'flex'} marginLeft={1}> 
        {featured_projects.map((featured_projects, index) => (
          <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}>
            <Card
            onclick={() => handleOpen(featured_projects)}
            variant={!isMobile ? 'image' : true}
            sx={{
              border: "1px solid #4a90e2",
              borderRadius: 5,
              textAlign: 'center',
              bgcolor: 'rgba(29, 7, 37, 0.32)',
              cursor: 'pointer',
              margin: 5,
              height: 'fixed',
              width: '350px',

              objectFit: 'cover', "&:hover": {
                bgcolor: 'rgba(77, 21, 97, 0.33)',
                transform: 'scale(1.05)',
                transition: '0.3s',

              }
            }}
            >
              {featured_projects.image && (
                <Box
                component={'img'}
                src={featured_projects.image}
                alt={featured_projects.title}
                sx={{
                  height: '175px',
                  width: '375px',
                  objectFit: 'cover',
                }}
                >
                </Box>
              )}
              <Button variant="outlined" size="large" href="/project"
                sx={{
                  transition: 'linear 0.3s', 
                  borderRadius: 8, 
                  margin: 5, 
                  marginRight: 4, 
                  "hover": {
                    color: '#263cb8ff',
                    transform: 'scale(1.25)',
                  },
                }}>
                VIEW PROJECTS
              </Button>
              <br></br>
              <Typography variant='paragraph' sx={{
                color: '#ffff',
                maxWidth: '50px',
                margin: 1,
                textAlign: 'center',
                py: 2

              }}>
                {featured_projects.description} 

                  </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default HomePage;
