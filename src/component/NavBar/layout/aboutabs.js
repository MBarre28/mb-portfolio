// src/components/layout/AboutTabs.js
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// Import your individual components
import Certification from "./certification";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const AboutTabs = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Components for each tab
  const tabContent = [
    <Certification />,
    <Education />,
    <Experience />,
    <Skills />
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#4527a0",
        borderRadius: 2,
        boxShadow: "0 0 15px #00e5ff",
        p: 2,
        maxWidth: "900px",
        margin: "20px auto",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        gap: 2,
        marginBottom: "20px",
      }}
    >
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        centered
        sx={{
          "& .MuiTab-root": {
            fontWeight: "bold",
            color: "white",
            minWidth: "50px",
          },
          "& .Mui-selected": {
            color: "#00e5ff",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#00e5ff",
          },
        }}
      >
        <Tab label="1. CERTIFICATION" />
        <Tab label="2. EDUCATION" />
        <Tab label="3. EXPERIENCE" />
        <Tab label="4. SKILLS" />
      </Tabs>

      {/* Content Section with Animation */}
      <Box sx={{ mt: 3 }}>
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tabContent[value]}
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutTabs;
