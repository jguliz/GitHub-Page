import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const CurrentProjects: React.FC = () => {
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
            Current Projects
          </Typography>
          
          {/* Featured Project */}
          <Card
            sx={{
              mt: 4,
              background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)',
              borderLeft: '4px solid #00d4aa',
              mb: 4,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <RocketLaunchIcon sx={{ mr: 2, color: 'success.main', fontSize: '2rem' }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  Featured Project
                </Typography>
              </Box>
              
              <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                ML-Powered Algorithmic Trading Platform
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Built ML pipeline with LSTM and ensemble models processing 500K+ daily volume stocks. Developed distributable trading tool with 60% confidence thresholds and real-time WebSocket data streams. Engineered microservice architecture using FastAPI, MySQL, Redis, and Docker containerization.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {['Python', 'PyTorch', 'React', 'MySQL', 'Docker', 'FastAPI', 'Redis'].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    color="success"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                  />
                ))}
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Status: In Development (Jul. 2025 -- Present)
              </Typography>
            </CardContent>
          </Card>

          {/* Project Grid */}
          <Grid container spacing={3}>
            {/* Project 1 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <WebIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        StockScope - Real-Time Stock Monitoring Platform
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Built stock screening application tracking 500+ stocks with real-time price updates and alerts. Implemented WebSocket data pipeline processing 500 API calls per second with sub-100ms response times.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript', 'REST API'].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          color="primary"
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Link href="https://github.com/jguliz/Stock-Screener" target="_blank" rel="noopener" sx={{ color: 'primary.main', fontSize: '0.8rem' }}>
                        GitHub
                      </Link>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      Status: Completed (Feb. 2025 -- Jun. 2025)
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Project 2 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <DataUsageIcon sx={{ mr: 1, color: 'warning.main' }} />
                      <Typography variant="h6" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
                        Cougar Library Management System
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Built library management platform with role-based authentication for 3 user types. Implemented inventory system handling borrowing, hold processing, and automated fine calculations.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {['React', 'Node.js', 'MySQL', 'Express.js'].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          color="warning"
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Link href="https://github.com/jguliz/Library_Management_System" target="_blank" rel="noopener" sx={{ color: 'warning.main', fontSize: '0.8rem' }}>
                        GitHub
                      </Link>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      Status: Completed (Jan. 2025 -- May. 2025)
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Project 3 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CodeIcon sx={{ mr: 1, color: 'secondary.main' }} />
                      <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                        Personal Portfolio Website
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" paragraph>
                      A modern, responsive portfolio website built with React, TypeScript, and Material-UI. Features include dynamic animations, responsive design, and a professional dark theme.
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {['React', 'TypeScript', 'Material-UI', 'Framer Motion', 'Vite'].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          color="secondary"
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Link href="https://github.com/jguliz/GitHub-Page" target="_blank" rel="noopener" sx={{ color: 'secondary.main', fontSize: '0.8rem' }}>
                        GitHub
                      </Link>
                      <Link href="https://jguliz.github.io/GitHub-Page" target="_blank" rel="noopener" sx={{ color: 'secondary.main', fontSize: '0.8rem' }}>
                        Live Demo
                      </Link>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      Status: Completed
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CurrentProjects;
