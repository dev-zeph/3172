const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="mb-0">Built with React & Bootstrap</p>
      </div>
    </footer>
  );
};

export default Footer;