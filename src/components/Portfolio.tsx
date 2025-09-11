import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, Code, Assessment } from '@mui/icons-material';

const Portfolio: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
        py: { xs: 8, lg: 10 },
        px: { xs: 2, lg: 4 },
      }}
    >
      <Container maxWidth="lg">
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
              Portfolio
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Coming Soon - Data Science Projects & Applications
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
              <Work sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Portfolio Coming Soon
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                A comprehensive showcase of my data science projects, machine learning applications,
                and quantitative analytics work will be available here.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Code sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Data Science Projects</Typography>
                <Typography variant="body2" color="text.secondary">
                  ML models and analytics applications
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Assessment sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Research Applications</Typography>
                <Typography variant="body2" color="text.secondary">
                  Real-world implementations of research findings
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              For now, you can view my current projects on the main page. The full portfolio will
              showcase detailed case studies, code repositories, and live demonstrations of my work.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/"
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
      </Container>
    </Box>
  );
};

export default Portfolio;
