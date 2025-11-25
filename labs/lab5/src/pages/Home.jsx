import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);
  const [city, setCity] = useState('Halifax');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setWeatherLoading(true);
        const response = await fetch(`http://localhost:5001/api/weather/${city}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        setWeather(data);
        setWeatherError(null);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setWeatherError('Unable to load weather data');
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
            <p className="lead text-muted">
              4th year Computer Science Student
            </p>
          </div>

          {/* Weather Widget */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h5 mb-3">
                <i className="bi bi-cloud-sun me-2"></i>Current Weather
              </h3>
              {weatherLoading ? (
                <div className="text-center py-3">
                  <div className="spinner-border spinner-border-sm text-primary" role="status">
                    <span className="visually-hidden">Loading weather...</span>
                  </div>
                </div>
              ) : weatherError ? (
                <div className="alert alert-warning mb-0" role="alert">
                  <small>{weatherError}</small>
                </div>
              ) : weather ? (
                <div>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4 className="h6 mb-2">{weather.city}</h4>
                      <div className="d-flex align-items-center mb-2">
                        {weather.icon && (
                          <img
                            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                            alt={weather.description}
                            style={{ width: '50px', height: '50px' }}
                          />
                        )}
                        <span className="fs-3 fw-bold ms-2">{Math.round(weather.temperature)}°C</span>
                      </div>
                      <p className="text-muted text-capitalize mb-2">{weather.description}</p>
                      <div className="d-flex gap-3 small text-muted">
                        <span>
                          <i className="bi bi-droplet me-1"></i>
                          Humidity: {weather.humidity}%
                        </span>
                        <span>
                          <i className="bi bi-thermometer-half me-1"></i>
                          Feels like: {Math.round(weather.feelsLike)}°C
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter city..."
                        defaultValue={city}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            setCity(e.target.value);
                          }
                        }}
                      />
                      <small className="text-muted">Press Enter to update</small>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="h3 mb-4">Hello, I'm Chizulu</h2>
                  <p className="text-muted">
                    I'm a passionate computer science student with a strong interest in web development 
                    and software engineering. 
                  </p>
                  <p className="text-muted">
                    I created this portfolio from a labs exercise to showcase my journey in technology, highlighting my skills, projects, 
                    and experiences. Feel free to explore and learn more about my work!
                  </p>
                  <div className="mt-4">
                    <Link to="/about" className="btn btn-primary me-2">Learn More</Link>
                    <Link to="/projects" className="btn btn-outline-primary">View Projects</Link>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <img src="Chizulu.jpg" alt="Selfie" className="img-fluid rounded" style={{ maxWidth: '250px', width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;