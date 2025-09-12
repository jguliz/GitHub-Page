import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { LibraryBooks, Science, Assessment } from '@mui/icons-material';

const Publications: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
        py: { xs: 8, lg: 10 },
      }}
    >
      <Box sx={{ width: '100%', px: { xs: 2, lg: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              Research Publications
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Coming Soon - Academic Papers & Research Contributions
            </Typography>
          </Box>

          <Paper
            elevation={8}
            sx={{
              p: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <LibraryBooks sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Publications Coming Soon
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                As I progress through my PhD in Data Science, I'll be contributing to the academic
                community through research publications in machine learning and quantitative analytics.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Science sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Research Papers</Typography>
                <Typography variant="body2" color="text.secondary">
                  Peer-reviewed publications in top-tier journals
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Assessment sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Conference Proceedings</Typography>
                <Typography variant="body2" color="text.secondary">
                  Presentations at data science conferences
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              My research will focus on developing novel methodologies that combine advanced statistical
              techniques with cutting-edge machine learning algorithms to solve complex real-world problems
              in data science and quantitative analytics.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/GitHub-Page/"
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                },
              }}
            >
              Return to Home
            </Button>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Publications;
