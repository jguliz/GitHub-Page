import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '/GitHub-Page/', isScroll: true, targetId: 'home' },
    { name: 'Portfolio', href: '/GitHub-Page/', isScroll: true, targetId: 'projects' },
    { name: 'Publications', href: '/GitHub-Page/publications/' },
  ];

  const handleNavClick = (item: any, event: React.MouseEvent) => {
    if (item.isScroll) {
      event.preventDefault();
      
      // Check if we're on the home page
      if (window.location.pathname === '/GitHub-Page/' || window.location.pathname === '/GitHub-Page') {
        // We're on the home page, so we can scroll to the section
        const element = document.getElementById(item.targetId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // We're on a different page, navigate to home page with hash
        window.location.href = `/GitHub-Page/#${item.targetId}`;
      }
    }
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="primary">
          Joshua Gulizia
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component="a" 
            href={item.href}
            onClick={(e) => handleNavClick(item, e)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10, 14, 39, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(102, 126, 234, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                lineHeight: 1.2,
              }}
            >
              Joshua Gulizia
            </Typography>
          </motion.div>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-end', ml: 4 }}>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      px: 2, 
                      py: 1, 
                      cursor: 'pointer',
                      lineHeight: 1.2,
                      fontSize: '1rem',
                    }}
                  >
                    {item.name}
                  </Typography>
                </motion.a>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
