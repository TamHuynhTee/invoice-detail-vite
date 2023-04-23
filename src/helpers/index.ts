import { isMobile } from 'react-device-detect';

export const isDarkMode = () =>
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

export const isMobileDevice = isMobile;
