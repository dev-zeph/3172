import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5001/api/projects');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        setProjects(data.projects);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please make sure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading projects...</span>
          </div>
          <p className="mt-3 text-muted">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error Loading Projects</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            <small>Make sure to start the backend server: <code>cd backend && npm start</code></small>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Projects</h1>
      <p className="lead text-muted mb-5">
        Here are some of the projects I've worked on that showcase my skills and passion for development.
      </p>
      
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="h4 mb-1">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          {project.name} <i className="bi bi-box-arrow-up-right small"></i>
                        </a>
                      ) : (
                        project.name
                      )}
                    </h2>
                    <p className="text-muted small mb-1">
                      <strong>Author:</strong> {project.author} | <strong>Timeline:</strong> {project.timeline}
                    </p>
                    <p className="text-muted small mb-0">
                      <strong>Languages:</strong> {project.languages.join(', ')}
                    </p>
                  </div>
                  <span className="badge bg-primary">{project.role}</span>
                </div>
                
                <p className="text-muted mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <h3 className="h6 fw-bold">Key Achievements:</h3>
                  <ul className="text-muted small">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="mb-2">{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="h6 fw-bold mb-2">Technologies Used:</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-info text-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;