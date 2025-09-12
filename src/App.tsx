import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { theme } from './theme/theme';
import Navigation from './components/Navigation';
import GoogleAnalytics from './components/GoogleAnalytics';
import SidebarNavigation from './components/SidebarNavigation';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const ProfessionalLinks = lazy(() => import('./components/ProfessionalLinks'));
const AcademicInterests = lazy(() => import('./components/AcademicInterests'));
const CurrentProjects = lazy(() => import('./components/CurrentProjects'));
const Talks = lazy(() => import('./components/Talks'));
const Teaching = lazy(() => import('./components/Teaching'));
const CV = lazy(() => import('./components/CV'));
const Blog = lazy(() => import('./components/Blog'));
const Publications = lazy(() => import('./components/Publications'));
const Portfolio = lazy(() => import('./components/Portfolio'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleAnalytics />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 30%, #2d1b69 70%, #0a0e27 100%)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          
          <Navigation />
          
          <Routes>
            {/* Home Page */}
            <Route path="/GitHub-Page/" element={
              <Box sx={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>
                {/* Left Sidebar */}
                <Box
                  sx={{
                    width: { xs: 0, lg: 280 },
                    flexShrink: 0,
                    position: { xs: 'fixed', lg: 'static' },
                    zIndex: 1000,
                  }}
                >
                  <SidebarNavigation />
                </Box>
                
                {/* Main Content */}
                <Box
                  sx={{
                    flex: 1,
                    paddingLeft: { xs: 2, lg: 2 },
                    paddingRight: { xs: 2, lg: 4 },
                    paddingTop: { xs: 8, lg: 10 },
                    paddingBottom: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box id="home" sx={{ scrollMarginTop: '100px' }}>
                    <Suspense fallback={<Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <Hero />
                    </Suspense>
                  </Box>
                  <Box id="about" sx={{ scrollMarginTop: '100px', marginTop: 8 }}>
                    <Suspense fallback={<Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <About />
                    </Suspense>
                  </Box>
                  <Box id="education" sx={{ scrollMarginTop: '100px' }}>
                    <Suspense fallback={<Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <Education />
                    </Suspense>
                  </Box>
                  <Box id="interests" sx={{ scrollMarginTop: '100px' }}>
                    <Suspense fallback={<Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <AcademicInterests />
                    </Suspense>
                  </Box>
                  <Box id="projects" sx={{ scrollMarginTop: '100px' }}>
                    <Suspense fallback={<Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <CurrentProjects />
                    </Suspense>
                  </Box>
                  <Box id="links" sx={{ scrollMarginTop: '100px' }}>
                    <Suspense fallback={<Box sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</Box>}>
                      <ProfessionalLinks />
                    </Suspense>
                  </Box>
                </Box>
              </Box>
            } />
            
            {/* Individual Pages */}
            <Route path="/GitHub-Page/portfolio/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <Portfolio />
                </Suspense>
              </Box>
            } />
            <Route path="/GitHub-Page/publications/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <Publications />
                </Suspense>
              </Box>
            } />
            <Route path="/GitHub-Page/talks/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <Talks />
                </Suspense>
              </Box>
            } />
            <Route path="/GitHub-Page/teaching/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <Teaching />
                </Suspense>
              </Box>
            } />
            <Route path="/GitHub-Page/cv/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <CV />
                </Suspense>
              </Box>
            } />
            <Route path="/GitHub-Page/blog/" element={
              <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', minHeight: '100vh' }}>
                <Suspense fallback={
                  <Box sx={{ 
                    height: '100vh', 
                    width: '100vw',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
                    color: 'white'
                  }}>
                    <div style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Loading...
                    </div>
                  </Box>
                }>
                  <Blog />
                </Suspense>
              </Box>
            } />
          </Routes>
          
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1f3a',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
