import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'small',
      [styles.colorBackgroundBottom]: variant === 'large',
    },
    className
  );

  return <div className={classes} />;
}

function Navbar(props) {
  const { darkMode } = props;
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  if (typeof window === 'undefined') {
    return <div></div>;
  }
  // const darkMode = localStorage.getItem('theme') === 'dark';
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-1000 mb-3 flex flex-col items-center max-w-2xl w-full mx-auto">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-white`}
              href="/"
            >
              Matts blog
            </Link>
            <button
              className={`dark:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">test</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug dark:text-white  hover:opacity-75`}
                  href="https://matiss.svikis.id.lv/"
                  target="_blank"
                  rel="noreferrer"
                  title="About me"
                >
                  <i
                    className={`fab fa-facebook-square text-lg leading-lg ${
                      darkMode ? 'text-white' : 'text-black'
                    }opacity-75`}
                  ></i>
                  <span className="ml-2">About me</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug dark:text-white  hover:opacity-75`}
                  href="https://github.com/Matiss-Svikis"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <Image
                    src="/static/github-square-512.webp"
                    alt="github icon"
                    style={{
                      backgroundColor: 'White',
                      borderRadius: '4px',
                      borderColor: 'red',
                      borderWidth: '50px',
                    }}
                    width="16"
                    height="16"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug dark:text-white  hover:opacity-75`}
                  href="https://www.linkedin.com/in/matiss-svikis/"
                  target="_blank"
                  rel="noreferrer"
                  title="Linkedin"
                >
                  <i
                    className={`fab fa-pinterest text-lg leading-lg ${
                      darkMode ? 'text-white' : 'text-black'
                    } opacity-75`}
                  ></i>
                  <svg
                    className="w-4 h-4 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return darkMode;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };
  const [darkMode, setDarkMode] = React.useState(false);
  useEffect(() => {
    setDarkMode(setAppTheme());
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        <Navbar darkMode={darkMode} />
        {children}
      </div>
    </div>
  );
}
