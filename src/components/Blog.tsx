import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Article, Create, TrendingUp } from '@mui/icons-material';

const Blog: React.FC = () => {
  // Blog component
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
              Research Blog
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Coming Soon - Data Science Insights & Research Journey
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
              <Article sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Blog Coming Soon
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                I'll be sharing my research journey, insights on machine learning and quantitative analytics,
                and tutorials on data science topics through regular blog posts.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Create sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Research Insights</Typography>
                <Typography variant="body2" color="text.secondary">
                  Deep dives into ML and quantitative analytics
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6">Tutorials & Guides</Typography>
                <Typography variant="body2" color="text.secondary">
                  Step-by-step data science tutorials
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Follow my journey as I explore the fascinating world of data science, share research findings,
              and provide practical insights for fellow data enthusiasts and researchers.
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

export default Blog;
