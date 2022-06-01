/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { data } from '../../../pages/api/navLinks.js';
import { useState, useCallback } from 'react';
import DropDownButton from '../../dropdownButton.jsx';

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleButton = useCallback(() => {
    setMenuState((menuState) => !menuState);
  }, []);

  return (
    <nav
      className={`bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ${
        menuState && 'h-screen'
      } md:h-full`}
    >
      <div className="xl:px-12 flex flex-wrap justify-between items-center mx-auto">
        <Link href={'/'}>
          <a>
            <img
              src="/TAC_LOGO.webp"
              className="mr-3 h-16 "
              alt="tac Logo"
            />
          </a>
        </Link>
        <button
          onClick={toggleButton}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span
            className="visible md:hidden"
            style={{ zIndex: '100' }}
            onClick={toggleButton}
          >
            <button
              className={[
                'hamburger hamburger--collapse ',
                menuState && 'is-active',
              ].join(' ')}
              onClick={toggleButton}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </span>
        </button>

        <div
          className={`${
            menuState == true ? '' : 'hidden'
          }  md:isvisible w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {data?.map(({ label, content, type, details }, i) => (
              <>
                {content.length > 1 ? (
                  <>
                    <DropDownButton
                      label={label}
                      content={content}
                      setMenuState={setMenuState}
                      menuState={menuState}
                    />
                  </> //dropdown
                ) : label == 'blog' ? (
                  <Link href="/blog">
                    <a>
                      <button
                        type="button"
                        className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        {label}
                      </button>
                    </a>
                  </Link>
                ) : label == 'donate' ? (
                  <button
                    type="button"
                    className="capitalize mt-80 md:mt-0 py-2.5 px-5 mr-2 mb-2 text-sm 2xl:text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {label}
                  </button>
                ) : (
                  <li>
                    <a
                      key={i}
                      href={label == 'Home' ? '/' : '/contact'}
                      className="capitalize block py-2 pr-4 pl-3 text-gray-700 border-b 2xl:text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {label}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
