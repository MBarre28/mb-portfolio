import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
  Backdrop,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/images/portfolio24.png",
    title: "E-Portfolio Website 2024 edition",
    description: "built in using frameworks for backend including Laravel and MySQL.",
    link: "https://github.com/MBarre28/MB_PortfolioDev",
  },
  {
    image: "/images/softsen.png",
    title: "E-Portfolio Website 2025 edition - You are here 👋",
    description: "built in using frameworks react.JS and Material UI.",
  },
  {
    image: "/images/ecom.png",
    title: "E-commerce website",
    description: "Built in for django backend framework for e-com store.",
    link: "https://github.com/MBarre28/MB-ecommerce",
  },
  {
    image: "/images/financeapp.png",
    title: "Finance App - ongoing",
    description: "???",
  },
  {
    image: "/images/ibm.png",
    title: "Task List - IBM SkillsBuild",
    description:
      "Used front-end components for HTML, CSS and Javascript with codeswing for creating interactive task list for building, testing and deploying automated websites.",
    link: "https://github.com/MBarre28/MB_TaskList",
  },
];

export default function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        xs: "column",
        md: "row",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #1a2a6c)",
        color: "white",
        padding: 4,
        display: "flex",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mt: 8,
            textAlign: "center",
            color: "#ffff",
            fontFamily: "monospace",
            fontWeight: "bold",
          }}
        >
          <Typewriter
            words={["My Projects 💻"]}
            typeSpeed={20}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </Typography>
        <br />
        <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold'
        }}
        > 
        A collection of creative projects combining with all tech stack 
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} margin={5} justifyContent="center">
            {projects.map((project, index) => (
              <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              >
                <Card
                  onClick={() => handleOpen(project)}
                  variant = {!isMobile ? 'image' : true }
                  sx={{
                    p: 2,
                    border: "1px solid #4a90e2",
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.05)",
                    textAlign: "center",
                    color: "#ffff",
                    cursor: "pointer",
                    transition: "ease-in-out 0.3s",
                    ":hover": {
                      color: "#a9b2ecff",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {project.image && (
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        height: { xs: 150, sm: 190 },
                        minWidth: "100%",
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                  )}

                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, maxWidth: '500px' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Backdrop */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {selectedProject && (
          <Card
            sx={{
              maxWidth: 500,
              padding: 3,
              borderRadius: 3,
              textAlign: "center",
              background: "#194588bb",
              color: "#ffff",

            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {selectedProject.image && (
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  maxHeight: 200,
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: 2,
                  mb: 2,
                  maxWidth: '500px',
                }}
              />
            )}
            <Box sx={{
                bgcolor: "linear-gradient(to bottom, #000000, #1a2a6c)",

            }}
            >
            <Typography variant="h5" sx={{ fontWeight: 'bold'}} gutterBottom>
              {selectedProject.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {selectedProject.description}
            </Typography>

            {selectedProject.link && (
              <Button
                variant="contained"
                color="primary"
                background = "#263cb8ff"
                href={selectedProject.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </Button>
            )}
            </Box>
          </Card>
        )}
      </Backdrop>
    </Box>
  );
}
