import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';

const SidebarNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <PersonIcon /> },
    { id: 'education', label: 'Education', icon: <SchoolIcon /> },
    { id: 'interests', label: 'Interests', icon: <CodeIcon /> },
    { id: 'projects', label: 'Projects', icon: <RocketLaunchIcon /> },
    { id: 'links', label: 'Contact & Links', icon: <ContactMailIcon /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate height of the top navigation
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const headerHeight = 80;
      const scrollPosition = window.scrollY + headerHeight + 50; // Add some buffer

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        top: 100,
        left: 20,
        width: 240,
        background: 'rgba(26, 31, 58, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(102, 126, 234, 0.3)',
        borderRadius: 3,
        zIndex: 1000,
        display: { xs: 'none', lg: 'block' },
        maxHeight: 'calc(100vh - 120px)',
        overflow: 'auto',
        margin: 0,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Navigation
        </Typography>
        
        <Divider sx={{ mb: 2, borderColor: 'rgba(102, 126, 234, 0.3)' }} />
        
        <List dense>
          {navigationItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  background: activeSection === item.id 
                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)'
                    : 'transparent',
                  border: activeSection === item.id 
                    ? '1px solid rgba(102, 126, 234, 0.5)'
                    : '1px solid transparent',
                  '&:hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: activeSection === item.id ? 'primary.main' : 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: activeSection === item.id ? 'bold' : 'normal',
                    color: activeSection === item.id ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default SidebarNavigation;
