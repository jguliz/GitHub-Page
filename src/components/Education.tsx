import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
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
            Education
          </Typography>
          
          <Card
            sx={{
              mt: 4,
              background: 'linear-gradient(135deg, rgba(77, 171, 247, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)',
              borderLeft: '4px solid #4dabf7',
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <SchoolIcon sx={{ mr: 1, color: 'info.main' }} />
                <Typography variant="h4" component="h3">
                  University of Houston
                </Typography>
              </Box>
              
              <Typography variant="h5" gutterBottom>
                Bachelor of Science in Computer Science, Minor in Mathematics
              </Typography>
              
              <Typography color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                Expected Graduation: <strong>May 2026</strong>
              </Typography>
              
              <Box mt={3}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                  <strong>Department:</strong> Computer Science
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                  <strong>University Website:</strong>{' '}
                  <Link href="https://www.uh.edu/nsm/computer-science/" target="_blank" rel="noopener" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    uh.edu/nsm/computer-science
                  </Link>
                </Typography>
                

                {/* Relevant Coursework */}
                <Box sx={{ mt: 3, mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    📚 Relevant Coursework
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {['Machine Learning', 'Data Science', 'Database Systems', 'Data Structures', 'Statistics'].map((course) => (
                      <Chip
                        key={course}
                        label={course}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: '0.8rem', mb: 1 }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Focus Areas */}
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    🎯 Focus Areas
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {['Software Engineering', 'Data Structures', 'Algorithms', 'Machine Learning', 'Web Development', 'Mobile Development'].map((area) => (
                      <Chip
                        key={area}
                        label={area}
                        color="secondary"
                        variant="filled"
                        size="medium"
                        sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
