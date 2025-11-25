import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/projects', (req, res) => {
  try {
    const projectsPath = path.join(__dirname, 'projects.json');
    const projectsData = fs.readFileSync(projectsPath, 'utf8');
    const projects = JSON.parse(projectsData);
    
    res.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Weather API proxy endpoint
app.get('/api/weather/:city', async (req, res) => {
  const { city } = req.params;
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  
  console.log('Weather API called for city:', city);
  console.log('API Key exists:', !!API_KEY);
  console.log('API Key length:', API_KEY ? API_KEY.length : 0);
  
  if (!API_KEY) {
    console.error('API key not configured!');
    return res.status(500).json({ error: 'API key not configured' });
  }
  
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log('Fetching weather from URL:', url.replace(API_KEY, 'HIDDEN'));
    
    const response = await fetch(url);
    
    console.log('Weather API response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Weather API error response:', errorData);
      return res.status(response.status).json({ 
        error: errorData.message || 'Weather data not found',
        details: errorData
      });
    }
    
    const data = await response.json();
    console.log('Weather data received successfully for:', data.name);
    
    // Extract relevant information
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      feelsLike: data.main.feels_like,
      pressure: data.main.pressure
    };
    
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- OPENWEATHER_API_KEY:', process.env.OPENWEATHER_API_KEY ? 'SET ✓' : 'NOT SET ✗');
  console.log('- PORT:', PORT);
});
