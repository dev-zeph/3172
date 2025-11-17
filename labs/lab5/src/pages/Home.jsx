import { Link } from 'react-router-dom';

const Home = () => {
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