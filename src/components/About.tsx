import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
            About Me
          </Typography>
          
          <Card 
            sx={{ 
              mt: 4,
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(26, 31, 58, 0.8) 100%)',
              borderLeft: '4px solid #667eea',
              backdropFilter: 'blur(10px)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Aspiring Data Scientist
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                I am an aspiring data scientist with a passion for uncovering insights from complex datasets and building intelligent systems that can make a real-world impact. Currently pursuing my Bachelor's degree in Computer Science with a minor in Mathematics at the University of Houston, I'm laying the foundation for a career dedicated to advancing the field of data science.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                My ultimate goal is to pursue a PhD in Data Science, where I plan to conduct cutting-edge research in machine learning, statistical modeling, and artificial intelligence. I'm particularly interested in developing novel algorithms for predictive analytics, natural language processing, and computer vision applications that can solve real-world problems across various industries.
              </Typography>
              
              {/* Research Vision Section */}
              <Box sx={{ mt: 4, mb: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  Research Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Through my academic journey and hands-on projects, I've developed a strong foundation in statistical analysis, programming, and data visualization. I believe that data science has the power to transform industries and improve lives, and I'm committed to contributing to this exciting field through both research and practical applications.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  My research vision focuses on the intersection of Machine Learning and Quantitative Analytics, where I aim to develop novel methodologies that combine advanced statistical techniques with cutting-edge ML algorithms to solve complex real-world problems. I'm particularly interested in creating robust analytical frameworks that can extract meaningful insights from large-scale datasets across various domains.
                </Typography>
              </Box>

              {/* Data Science Skills */}
              <Box sx={{ mt: 4, mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  Data Science Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  {['Python', 'R', 'SQL', 'Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'].map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Research Interests */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  Research Interests
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {['Machine Learning', 'Quantitative Analytics', 'Statistical Modeling', 'Predictive Analytics', 'Time Series Analysis', 'Financial Modeling', 'Risk Assessment', 'Algorithm Development'].map((interest) => (
                    <Box
                      key={interest}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #00d4aa 0%, #00a085 100%)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      {interest}
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
