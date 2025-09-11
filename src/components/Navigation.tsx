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
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio/' },
    { name: 'Publications', href: '/publications/' },
    { name: 'Talks', href: '/talks/' },
    { name: 'Teaching', href: '/teaching/' },
    { name: 'CV', href: '/cv/' },
    { name: 'Blog', href: '/blog/' },
  ];

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
          <ListItem key={item.name} component="a" href={item.href}>
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
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography variant="body1" sx={{ px: 2, py: 1 }}>
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
