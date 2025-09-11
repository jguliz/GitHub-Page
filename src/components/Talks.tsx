import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Mic, Schedule, TrendingUp } from '@mui/icons-material';

const Talks: React.FC = () => {
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
              Talks & Presentations
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Coming Soon - Research Presentations & Conference Talks
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
              <Mic sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Talks Coming Soon
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                As I progress through my PhD in Data Science, I'll be sharing my research findings
                through various presentations and conference talks.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Schedule sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Conference Talks</Typography>
                <Typography variant="body2" color="text.secondary">
                  Research presentations at data science conferences
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Workshop Sessions</Typography>
                <Typography variant="body2" color="text.secondary">
                  Interactive workshops on ML and quantitative analytics
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Stay tuned for updates on my upcoming presentations covering topics in machine learning,
              quantitative analytics, and data science research.
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

export default Talks;
