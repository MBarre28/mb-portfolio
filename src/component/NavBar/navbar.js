import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Link,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true if screen < md

  const menuItems = [
    { text: '1. HOME', link: "/" },
    { text: '2. ABOUT', link: "/about" },
    { text: '3. PROJECTS', link: "/project" },
    { text: '4. CONTACT', link: "/contact" },
    { text: '5. VIDEOS', link: "/video"}
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(30px)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Link url = '/'>
          <Box
            component="img"
            src="/images/softsen.png"
            alt="softsen logo"
            sx={{
              height: 50,
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            My portfolio
          </Typography>

          {/* Desktop Menu */}
          {!isMobile &&
            menuItems.map((item, index) => (
              <Button
                key={index}
                href={item.link}
                color="inherit"
                sx={{
                  fontSize: '1.25rem',
                  fontFamily: 'monospace',
                  mx: 1.5,
                  fontWeight: 'bold',
                  letterSpacing: 'normal',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#43a7c5ff',
                    textDecoration: 'underline',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, background: '#111', height: '100%', color: '#fff', p: 2, fontSize: '1rem',
                  fontFamily: 'monospace', fontWeight: 'bold',}}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.link}
                onClick={() => setOpen(false)}
                sx={{
                  color: '#ffff',
                  transition: 'all 0.3s ease',
                  mt: 5,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <br></br>
          <br></br>
            <Typography variant = 'h6' sx = {{fontFamily: 'monospace',
                  mx: 1.5,}}> 
              © {new Date().getFullYear()} MB_softsen. All rights reserved.
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
