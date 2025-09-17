import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CalculateIcon from '@mui/icons-material/Calculate';

const AcademicInterests: React.FC = () => {
  const interestCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <PsychologyIcon />,
      color: '#667eea',
      items: [
        'Deep Learning & Neural Networks',
        'Supervised & Unsupervised Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning',
        'Model Optimization & Tuning'
      ],
      description: 'Developing intelligent systems and algorithms that can learn from data and make predictions.'
    },
    {
      title: 'Quantitative Analytics',
      icon: <AnalyticsIcon />,
      color: '#00d4aa',
      items: [
        'Statistical Modeling & Analysis',
        'Time Series Forecasting',
        'Risk Assessment & Management',
        'Financial Modeling',
        'Predictive Analytics',
        'Data Mining & Pattern Recognition'
      ],
      description: 'Applying mathematical and statistical methods to extract insights from complex datasets.'
    },
    {
      title: 'Mathematical Foundations',
      icon: <CalculateIcon />,
      color: '#ffd93d',
      items: [
        'Linear Algebra & Calculus',
        'Probability & Statistics',
        'Optimization Theory',
        'Discrete Mathematics',
        'Numerical Analysis',
        'Algorithm Design & Analysis'
      ],
      description: 'Building strong mathematical foundations essential for advanced data science research.'
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 2,
              },
            }}
          >
            Academic Interests
          </Typography>
          
          <Card
            sx={{
              mt: 4,
              background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)',
              borderLeft: '4px solid #ffd93d',
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Research Focus Areas
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {interestCategories.map((category, index) => (
                  <Grid item xs={12} md={4} key={category.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        sx={{ 
                          height: '100%',
                          background: `linear-gradient(135deg, ${category.color}15 0%, rgba(26, 31, 58, 0.8) 100%)`,
                          borderLeft: `4px solid ${category.color}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: `0 10px 30px ${category.color}30`,
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box 
                              sx={{ 
                                color: category.color, 
                                mr: 2,
                                fontSize: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                background: `${category.color}20`,
                              }}
                            >
                              {category.icon}
                            </Box>
                            <Typography variant="h6" sx={{ color: category.color, fontWeight: 'bold' }}>
                              {category.title}
                            </Typography>
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, fontStyle: 'italic' }}>
                            {category.description}
                          </Typography>
                          
                          <List dense>
                            {category.items.map((item) => (
                              <ListItem key={item} disablePadding sx={{ mb: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      backgroundColor: category.color,
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={item} 
                                  primaryTypographyProps={{ 
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AcademicInterests;
