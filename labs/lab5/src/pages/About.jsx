import { useState } from 'react';

const About = () => {
  // Skills data with categories
  const allSkills = [
    { name: 'JavaScript', category: 'Programming Languages', color: 'primary' },
    { name: 'Python', category: 'Programming Languages', color: 'primary' },
    { name: 'TypeScript', category: 'Programming Languages', color: 'primary' },
    { name: 'SQL', category: 'Programming Languages', color: 'primary' },
    { name: 'GLSL', category: 'Programming Languages', color: 'primary' },
    { name: 'React.js', category: 'Frontend Development', color: 'success' },
    { name: 'Three.js', category: 'Frontend Development', color: 'success' },
    { name: 'WebXR', category: 'Frontend Development', color: 'success' },
    { name: 'Tailwind CSS', category: 'Frontend Development', color: 'success' },
    { name: 'Bootstrap', category: 'Frontend Development', color: 'success' },
    { name: 'Node.js', category: 'Backend & Databases', color: 'warning' },
    { name: 'Express.js', category: 'Backend & Databases', color: 'warning' },
    { name: 'FastAPI', category: 'Backend & Databases', color: 'warning' },
    { name: 'PostgreSQL', category: 'Backend & Databases', color: 'warning' },
    { name: 'Supabase', category: 'Backend & Databases', color: 'warning' },
    { name: 'Docker', category: 'DevOps & Cloud', color: 'info' },
    { name: 'AWS EC2', category: 'DevOps & Cloud', color: 'info' },
    { name: 'Azure CI/CD', category: 'DevOps & Cloud', color: 'info' },
    { name: 'GitHub Actions', category: 'DevOps & Cloud', color: 'info' },
    { name: 'Vercel', category: 'DevOps & Cloud', color: 'info' },
    { name: 'OpenAI GPT-3.5', category: 'AI & Machine Learning', color: 'danger' },
    { name: 'Mistral 7B', category: 'AI & Machine Learning', color: 'danger' },
    { name: 'RAG Architecture', category: 'AI & Machine Learning', color: 'danger' },
    { name: 'Scikit-learn', category: 'AI & Machine Learning', color: 'danger' },
    { name: 'Langchain', category: 'AI & Machine Learning', color: 'danger' },
  ];

  const categories = [...new Set(allSkills.map(skill => skill.category))];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter skills based on search term and category
  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-4">About Me</h1>
      
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h4 mb-3">Education</h2>
              <div className="mb-3">
                <h3 className="h6 fw-bold">Bachelor of Computer Science</h3>
                <p className="text-muted mb-1">Dalhousie University</p>
                <p className="text-muted small">Expected Graduation: 2026</p>
              </div>
              <p className="text-muted">
                Focusing on web development, software engineering, and data structures. 
                Maintaining a strong academic record while actively participating in 
                coding projects and hackathons.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-lg-12 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h4 mb-3">Work Experience</h2>
              
              <div className="mb-4">
                <h3 className="h6 fw-bold">Technical Lead / Director of AR Development</h3>
                <p className="text-muted mb-1">CHEM-AR</p>
                <p className="text-muted small mb-2">July 2025 – Present</p>
                <ul className="text-muted small">
                  <li>Architected and directed the development of a high-performance, open-source modular Augmented Reality (AR) visualization engine using Three.js and WebXR, supporting 1000+ active users</li>
                  <li>Engineered custom, GPU-accelerated rendering pipelines using GLSL shaders and advanced physics-based rendering (PBR) techniques to achieve 60 FPS frame rates and photorealistic molecule visualization</li>
                  <li>Established robust, enterprise-grade Azure CI/CD pipelines for automated build, testing, and deployment, reducing integration defects by 25% and ensuring seamless cross-platform compatibility</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="h6 fw-bold">Software Developer Intern</h3>
                <p className="text-muted mb-1">AN & Associates</p>
                <p className="text-muted small mb-2">Jan 2025 – Apr 2025</p>
                <ul className="text-muted small">
                  <li>Led the end-to-end development of a full-stack property management platform using MERN/PERN stack principles, automating critical business workflows and eliminating over 30% of manual data entry</li>
                  <li>Integrated secure authentication and role-based access control with JWT and Supabase Auth, ensuring data privacy compliance and reliable session handling across multiple devices</li>
                  <li>Deployed and containerized the system on AWS EC2 using Docker and GitHub Actions CI/CD, enabling zero downtime and scalable performance</li>
                </ul>
              </div>
              
              <div className="mb-0">
                <h3 className="h6 fw-bold">Lead Web Developer</h3>
                <p className="text-muted mb-1">Dalhousie Machine Learning Society & Dalhousie Consulting Association</p>
                <p className="text-muted small mb-2">September 2025 – Present</p>
                <ul className="text-muted small mb-0">
                  <li>Architected and executed a full-stack migration of two high-traffic society websites from static HTML to a React.js MPA (Multiple Page Application), improving performance and boosting SEO/traffic by over 35%</li>
                  <li>Designed and implemented a scalable PostgreSQL schema managed by Supabase, leveraging custom API endpoints to power dynamic user dashboards and self-service content management</li>
                  <li>Integrated an API-driven headless CMS (Strapi) for asynchronous content delivery, reducing internal content update latency by 80%, and aligned the technical roadmap with key stakeholders and budget constraints while establishing the CI/CD pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h4 mb-3">Technical Skills</h2>
          
          {/* Search and Filter Controls */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <label htmlFor="skillSearch" className="form-label">Search Skills</label>
              <input
                id="skillSearch"
                type="text"
                className="form-control"
                placeholder="Type to search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search skills by name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="categoryFilter" className="form-label">Filter by Category</label>
              <select
                id="categoryFilter"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter skills by category"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              <button
                className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                onClick={() => setSelectedCategory('All')}
              >
                All ({allSkills.length})
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({allSkills.filter(s => s.category === category).length})
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="mb-3">
            <small className="text-muted">
              Showing {filteredSkills.length} of {allSkills.length} skills
              {searchTerm && ` matching "${searchTerm}"`}
            </small>
          </div>

          {/* Filtered Skills Display */}
          <div className="row">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <div key={index} className="col-auto mb-2">
                  <span className={`badge bg-${skill.color} me-2`}>{skill.name}</span>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-muted text-center py-4">
                  No skills found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Career Goals</h2>
          <p className="text-muted">
            I'm passionate about creating innovative web solutions that make a difference. 
            My goal is to work as a full-stack developer where I can combine my technical 
            skills with creative problem-solving to build scalable and user-centric applications. 
            I'm particularly interested in emerging technologies and continuously learning 
            new skills to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;