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
  ];

  return (
    <Box
      sx={{
        borderRadius: 2,
        boxShadow: "0 0 15px #00e5ff",
        p: 2,
        margin: "20px auto",
        flexDirection: isMobile ? "column" : "column",
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
          },
          "& .Mui-selected": {
            color: "#00e5ff",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#00e5ff",
          },
        }}
      >
        <Tab label=" 🎓 CERTIFICATION" />
        <Tab label=" 📚 EDUCATION" />
        <Tab label=" 🌎 EXPERIENCE" />
        <Tab label=" 🧠 SKILLS" />
      </Tabs>

      {/* Content Section with Animation */}
      <Box sx={{ p: 3, textAlign: 'left' }}>
        {value === 0 && < Certification />}
        {value === 1 && < Education />}
        {value === 2 && < Experience />}
        {value === 3 && < Skills />}
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ duration: 0.4 }}
        >
          {tabContent[value]}
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutTabs;
