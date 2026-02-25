import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      id="theme-toggle" 
      aria-label="Toggle dark/light theme" 
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <div className={`t-icon ${theme === 'dark' ? 'active' : ''}`} id="icon-dark">
        🌙
      </div>
      <div className={`t-icon ${theme === 'light' ? 'active' : ''}`} id="icon-light">
        ☀️
      </div>
    </button>
  );
};

export default ThemeToggle;
