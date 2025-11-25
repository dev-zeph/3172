import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <>
          <i className="bi bi-moon-stars-fill"></i>
          <span className="ms-2 d-none d-sm-inline">Dark</span>
        </>
      ) : (
        <>
          <i className="bi bi-sun-fill"></i>
          <span className="ms-2 d-none d-sm-inline">Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
