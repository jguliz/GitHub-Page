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
                        href="https://www.linkedin.com/in/josh-gulizia"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                      >
                        josh-gulizia
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
                      <Link
                        href="mailto:jgulizia1205@gmail.com"
                        color="inherit"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        <Typography>jgulizia1205@gmail.com</Typography>
                      </Link>
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
                               href="/GitHub-Page/JguliziaResume.pdf"
                               download="JguliziaResume.pdf"
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProfessionalLinks;
