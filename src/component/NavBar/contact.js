import * as React from 'react';
import { Typography, Box, Container, Link, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PlaceIcon from "@mui/icons-material/Place";
import YouTubeIcon from '@mui/icons-material/YouTube';

const contactDetails = [
  {
    title: "Email",
    icon: <ContactMailIcon fontSize="large" />,
    link: "mailto:mmuh8311@gmail.com",
    description: "Contact me via email for info",
  },
  {
    title: "Location",
    icon: <PlaceIcon fontSize="large" />,
    description: "London, UK",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" />,
    link: "https://www.linkedin.com/in/your-linkedin",
    description: "Connect with me on LinkedIn",
  },
  {
    title: 'Youtube',
    icon: <YouTubeIcon fontSize="large"/>,
    link: 'https://www.youtube.com/@softssen',
    description: 'Subscribe to my youtube channel for exclusive content!',

  },
];

const ContactPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #1a2a6c)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h3"
          sx={{ mt: 6, fontFamily: "monospace", fontWeight: "bold", textAlign: "center" }}
        >
          <Typewriter words={["Get in Touch 💬"]} loop={false} typeSpeed={20} delaySpeed={1000} />
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{ mt: 4, fontSize: "18px", textAlign: "center", maxWidth: "600px", mx: "auto" }}
        >
          Feel free to contact me through any of the platforms below. I'm here to support.
        </Typography>

        {/* Dynamic Grid */}
        <Grid container spacing={8} justifyContent="center">
          {contactDetails.map((item, index) => (
            <Grid item xs={12} sm={6} md={2} key={index} mt = {2}>
              <Card
                sx={{
                  display: "absolute",
                  textAlign: "center",
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "white",
                  height: "300px",
                  width: "300px",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                <CardContent>
                  {/* Icon */}
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>

                  {/* Title */}
                  <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: 'monospace' }}>
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                    {item.description}
                  </Typography>

                  {/* Optional Link */}
                  {item.link && (
                    <Button sx={{
                        color: '#ffff',
                        background: 'rgba(0, 0, 0, 0.08)',
                        textDecoration: 'dotted',
                        textTransform: 'none',


                    }}> 
                      <Link
                        href={item.link}
                        rel="noopener noreferrer"
                        sx={{ display: "block", mt: 1, color: "#46cf2aff", fontSize: 'large'}}
                      >
                        {item.title === "Email" ? "Send Email" : "Visit Profile"}
                      </Link>
                      </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
