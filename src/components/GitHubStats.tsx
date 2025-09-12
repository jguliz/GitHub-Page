import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  total_stars: number;
  contributions: ContributionDay[];
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration - replace with actual GitHub API calls
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        // For now, using mock data. In production, you'd call GitHub API
        const mockStats: GitHubStats = {
          followers: 42,
          following: 38,
          public_repos: 24,
          total_stars: 156,
          contributions: generateMockContributions()
        };
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStats(mockStats);
      } catch (err) {
        setError('Failed to load GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const generateMockContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      contributions.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10),
        level: Math.floor(Math.random() * 5)
      });
    }
    
    return contributions;
  };

  const getHeatmapColor = (level: number) => {
    const colors = [
      '#161b22', // No contributions
      '#0e4429', // 1-3 contributions
      '#006d32', // 4-6 contributions
      '#26a641', // 7-9 contributions
      '#39d353'  // 10+ contributions
    ];
    return colors[level] || colors[0];
  };

  const getCurrentStreak = () => {
    if (!stats) return 0;
    
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const day = stats.contributions.find(c => c.date === dateStr);
      if (day && day.count > 0) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <LinearProgress sx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Loading GitHub stats...
        </Typography>
      </Box>
    );
  }

  if (error || !stats) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body2" color="error">
          {error || 'Unable to load GitHub stats'}
        </Typography>
      </Box>
    );
  }

  const currentStreak = getCurrentStreak();
  const totalContributions = stats.contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ mb: 2 }}>

        {/* Live Stats Grid */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={6} sm={3}>
            <Card sx={{ 
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" sx={{ 
                  color: '#667eea',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {stats.followers}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Followers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Card sx={{ 
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" sx={{ 
                  color: '#667eea',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {stats.public_repos}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Repositories
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Card sx={{ 
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" sx={{ 
                  color: '#667eea',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {stats.total_stars}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stars Earned
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Card sx={{ 
              background: 'rgba(102, 126, 234, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h4" sx={{ 
                  color: '#667eea',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {currentStreak}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Day Streak
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Contribution Heatmap */}
        <Box sx={{ 
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: 2,
          p: 3,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Contribution Activity (Last Year)
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1,
            justifyContent: 'center',
            mb: 2
          }}>
            {stats.contributions.slice(-365).map((day, index) => (
              <Box
                key={day.date}
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: getHeatmapColor(day.level),
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    zIndex: 1
                  }
                }}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography variant="body2" color="text.secondary">
              Total: {totalContributions} contributions in the last year
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                Less
              </Typography>
              {[0, 1, 2, 3, 4].map(level => (
                <Box
                  key={level}
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: getHeatmapColor(level),
                    borderRadius: 1
                  }}
                />
              ))}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default GitHubStats;
