import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { theme } from './theme/theme';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import ProfessionalLinks from './components/ProfessionalLinks';
import AcademicInterests from './components/AcademicInterests';
import CurrentProjects from './components/CurrentProjects';
import Navigation from './components/Navigation';
import GoogleAnalytics from './components/GoogleAnalytics';
import SidebarNavigation from './components/SidebarNavigation';
import Talks from './components/Talks';
import Teaching from './components/Teaching';
import CV from './components/CV';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleAnalytics />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            background: '#0a0e27',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navigation />
          
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <Box sx={{ display: 'flex', flex: 1 }}>
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
                    marginLeft: { xs: 0, lg: 0 },
                    paddingLeft: { xs: 0, lg: 0 },
                    paddingRight: { xs: 2, lg: 4 },
                    paddingTop: { xs: 8, lg: 10 },
                    paddingBottom: 2,
                  }}
                >
                  <Box id="home" sx={{ scrollMarginTop: '100px' }}>
                    <Hero />
                  </Box>
                  <Box id="about" sx={{ scrollMarginTop: '100px' }}>
                    <About />
                  </Box>
                  <Box id="education" sx={{ scrollMarginTop: '100px' }}>
                    <Education />
                  </Box>
                  <Box id="links" sx={{ scrollMarginTop: '100px' }}>
                    <ProfessionalLinks />
                  </Box>
                  <Box id="interests" sx={{ scrollMarginTop: '100px' }}>
                    <AcademicInterests />
                  </Box>
                  <Box id="projects" sx={{ scrollMarginTop: '100px' }}>
                    <CurrentProjects />
                  </Box>
                </Box>
              </Box>
            } />
            
            {/* Individual Pages */}
            <Route path="/portfolio/" element={<Portfolio />} />
            <Route path="/publications/" element={<Publications />} />
            <Route path="/talks/" element={<Talks />} />
            <Route path="/teaching/" element={<Teaching />} />
            <Route path="/cv/" element={<CV />} />
            <Route path="/blog/" element={<Blog />} />
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
