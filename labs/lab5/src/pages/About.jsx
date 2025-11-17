const About = () => {
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
          <div className="row">
            <div className="col-md-6 mb-3">
              <h3 className="h6 fw-bold">Programming Languages</h3>
              <div>
                <span className="badge bg-primary me-2 mb-2">JavaScript</span>
                <span className="badge bg-primary me-2 mb-2">Python</span>
                <span className="badge bg-primary me-2 mb-2">TypeScript</span>
                <span className="badge bg-primary me-2 mb-2">SQL</span>
                <span className="badge bg-primary me-2 mb-2">GLSL</span>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h3 className="h6 fw-bold">Frontend Development</h3>
              <div>
                <span className="badge bg-success me-2 mb-2">React.js</span>
                <span className="badge bg-success me-2 mb-2">Three.js</span>
                <span className="badge bg-success me-2 mb-2">WebXR</span>
                <span className="badge bg-success me-2 mb-2">Tailwind CSS</span>
                <span className="badge bg-success me-2 mb-2">Bootstrap</span>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h3 className="h6 fw-bold">Backend & Databases</h3>
              <div>
                <span className="badge bg-warning me-2 mb-2">Node.js</span>
                <span className="badge bg-warning me-2 mb-2">Express.js</span>
                <span className="badge bg-warning me-2 mb-2">FastAPI</span>
                <span className="badge bg-warning me-2 mb-2">PostgreSQL</span>
                <span className="badge bg-warning me-2 mb-2">Supabase</span>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <h3 className="h6 fw-bold">DevOps & Cloud</h3>
              <div>
                <span className="badge bg-info me-2 mb-2">Docker</span>
                <span className="badge bg-info me-2 mb-2">AWS EC2</span>
                <span className="badge bg-info me-2 mb-2">Azure CI/CD</span>
                <span className="badge bg-info me-2 mb-2">GitHub Actions</span>
                <span className="badge bg-info me-2 mb-2">Vercel</span>
              </div>
            </div>
            <div className="col-md-12">
              <h3 className="h6 fw-bold">AI & Machine Learning</h3>
              <div>
                <span className="badge bg-danger me-2 mb-2">OpenAI GPT-3.5</span>
                <span className="badge bg-danger me-2 mb-2">Mistral 7B</span>
                <span className="badge bg-danger me-2 mb-2">RAG Architecture</span>
                <span className="badge bg-danger me-2 mb-2">Scikit-learn</span>
                <span className="badge bg-danger me-2 mb-2">Langchain</span>
              </div>
            </div>
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