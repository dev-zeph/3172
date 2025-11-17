const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'B-ANAN',
      link: 'https://b-anan.vercel.app/',
      timeline: 'Spring 2025 - Current',
      description: 'Business Revenue Prediction platform using advanced time-series forecasting models.',
      achievements: [
        'Engineered hybrid time-series forecasting models (SARIMAX-XGBoost, Random Forest, Markov Switching) for revenue prediction across macroeconomic scenarios',
        'Integrated WorldBank API data as external regressors, simulating real-world financial dynamics for more robust predictions',
        'Built normalized Supabase schema and integrated OpenAI\'s API (GPT-3.5) to automatically analyze user uploaded CSV with predicted revenue, generating predicted numbers to actionable business insights'
      ],
      technologies: ['SARIMAX', 'XGBoost', 'Random Forest', 'WorldBank API', 'Supabase', 'OpenAI API', 'GPT-3.5'],
      role: 'Full Stack Developer',
      problem: 'Created a comprehensive business intelligence platform for accurate revenue forecasting'
    },
    {
      id: 2,
      title: 'PDFreak AI',
      timeline: 'Aug 2024 – Jan 2025',
      description: 'Advanced AI-powered threat detection engine for SOC environments.',
      achievements: [
        'Engineered a novel, low-latency AI detection engine integrating static and dynamic analysis to identify zero-day threats, achieving an industry-competitive 83.1% F1-Score',
        'Designed and deployed an optimized RAG architecture (Mistral 7B + VectorDB) for context-aware, real-time threat intelligence and MITRE mapping, cutting triage time by over 40%',
        'Developed containerized FastAPI backend and React/Tailwind frontend for offline SOC deployment, enhancing system compliance and usability'
      ],
      technologies: ['AI/ML', 'Mistral 7B', 'VectorDB', 'FastAPI', 'React', 'Tailwind CSS', 'Docker', 'MITRE'],
      role: 'Lead Developer',
      problem: 'Built an intelligent threat detection system with real-time analysis and compliance'
    }
  ];

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
                          {project.title} <i className="bi bi-box-arrow-up-right small"></i>
                        </a>
                      ) : (
                        project.title
                      )}
                    </h2>
                    <p className="text-muted small mb-0">{project.timeline}</p>
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
                
                <div className="mb-3">
                  <h3 className="h6 fw-bold">Problem Solved:</h3>
                  <p className="text-muted small">{project.problem}</p>
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