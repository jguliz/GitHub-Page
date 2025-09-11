import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="md">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Joshua Gulizia"
              sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                border: '4px solid #667eea',
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                objectFit: 'cover',
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography 
              variant="h1" 
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Joshua Gulizia
            </Typography>
            <Typography 
              variant="h4" 
              color="text.secondary" 
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: '1.5rem', sm: '2rem' },
              }}
            >
              Computer Science Student | University of Houston
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.2rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Passionate about technology, innovation, and building the future through code
            </Typography>
            
            {/* Call to Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
              <motion.a
                href="https://www.linkedin.com/in/josh-gulizia-401474290"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 32px rgba(0, 119, 181, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 119, 181, 0.4)',
                    },
                  }}
                >
                  LinkedIn Profile
                </Box>
              </motion.a>
              
              <motion.a
                href="/files/JguliziaResume.pdf"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    border: '2px solid #667eea',
                    color: '#667eea',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(102, 126, 234, 0.2)',
                    },
                  }}
                >
                  Download Resume
                </Box>
              </motion.a>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
