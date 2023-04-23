import { useEffect, useState } from 'react';
import { isDarkMode } from '@/helpers';
import IconDarkMode from '@/components/Icons/IconDarkMode';
import IconLightMode from '@/components/Icons/IconLightMode';

type THEME_TYPE = 'dark' | 'light';

function ThemeSwitcher() {
  const [_, setTheme] = useState<THEME_TYPE>();

  useEffect(() => {
    const pickTheme = () => {
      if (isDarkMode()) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    window.addEventListener('storage', pickTheme);
    return () => {
      window.removeEventListener('storage', pickTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode()) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="w-5 h-5 cursor-pointer" onClick={toggleTheme}>
      {isDarkMode() ? <IconDarkMode /> : <IconLightMode />}
    </div>
  );
}

export default ThemeSwitcher;
