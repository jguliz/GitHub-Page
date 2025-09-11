import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProfessionalLinks: React.FC = () => {
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
            Contact & Links
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      🔗 Connect With Me
                    </Typography>
                    
                    <Box display="flex" alignItems="center" mb={2}>
                      <LinkedInIcon sx={{ mr: 1, color: '#0077b5' }} />
                      <Link
                        href="https://www.linkedin.com/in/josh-gulizia-401474290"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                      >
                        josh-gulizia-401474290
                      </Link>
                    </Box>
                    
                    <Box display="flex" alignItems="center" mb={2}>
                      <GitHubIcon sx={{ mr: 1, color: 'text.primary' }} />
                      <Link
                        href="https://github.com/jguliz"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                      >
                        jguliz
                      </Link>
                    </Box>
                    
                    <Box display="flex" alignItems="center">
                      <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography>jgulizia1205@gmail.com</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      📄 Resume & Resources
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        🏆 Certifications
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                        <strong>IBM Data Science Professional Certificate</strong><br/>
                        Machine Learning, SQL, Data Visualization, Predictive Modeling
                      </Typography>
                    </Box>
                    
                           <Box display="flex" alignItems="center" mb={2}>
                             <DescriptionIcon sx={{ mr: 1, color: 'error.main' }} />
                             <Link
                               href="/files/JguliziaResume.pdf"
                               target="_blank"
                               rel="noopener"
                               color="inherit"
                             >
                               Download PDF
                             </Link>
                           </Box>
                    
                           <Box display="flex" alignItems="center" mb={2}>
                             <SchoolIcon sx={{ mr: 1, color: 'info.main' }} />
                             <Link
                               href="https://www.uh.edu/nsm/computer-science/"
                               target="_blank"
                               rel="noopener"
                               color="inherit"
                             >
                               CS Department
                             </Link>
                           </Box>
                    
                    <Box display="flex" alignItems="center">
                      <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography>Houston, Texas</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card 
              sx={{ 
                mt: 6,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)',
                borderLeft: '4px solid #667eea',
                textAlign: 'center',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  🚀 Ready to Connect?
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  Whether you're looking for a talented developer, want to collaborate on a project, or just want to chat about technology, I'd love to hear from you!
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="mailto:jgulizia1205@gmail.com"
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Send Email
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/josh-gulizia-401474290"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: 3,
                      border: '2px solid #0077b5',
                      color: '#0077b5',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      background: 'rgba(0, 119, 181, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(0, 119, 181, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Connect on LinkedIn
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProfessionalLinks;
