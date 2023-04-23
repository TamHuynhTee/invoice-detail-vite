import { useEffect } from 'react';
import { isDarkMode } from '@/helpers';
import RouterPage from '@/pages';

// Mobile first

function App() {
  useEffect(() => {
    const pickTheme = () => {
      if (isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    pickTheme();

    window.addEventListener('storage', pickTheme);

    return () => {
      window.removeEventListener('storage', pickTheme);
    };
  }, []);

  return <RouterPage />;
}

export default App;
