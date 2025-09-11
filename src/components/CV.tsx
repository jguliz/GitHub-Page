import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Description, Download, Work } from '@mui/icons-material';

const CV: React.FC = () => {
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
              Curriculum Vitae
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Coming Soon - Comprehensive Academic & Professional CV
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
              <Description sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                CV Coming Soon
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                A comprehensive academic CV will be available soon, showcasing my educational background,
                research experience, and professional achievements in data science.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Download sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">PDF Download</Typography>
                <Typography variant="body2" color="text.secondary">
                  Complete academic and professional CV
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Work sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Research Experience</Typography>
                <Typography variant="body2" color="text.secondary">
                  Detailed research projects and publications
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              For now, you can download my current resume from the main page. The full academic CV
              will be available as I progress through my PhD program and gain more research experience.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="/files/JguliziaResume.pdf"
                target="_blank"
                startIcon={<Download />}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                  },
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.light',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  },
                }}
              >
                Return to Home
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CV;
