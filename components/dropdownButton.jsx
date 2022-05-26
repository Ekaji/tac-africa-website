/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const DropDownButton = ({
  setMenuState,
  menuState,
  label,
  content,
  i,
}) => {
  const router = useRouter();

  const [isShown, setIsShown] = useState(false);

  console.log(content[1])

  return (
    <li
      key={i}
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      // onClick={() => {setIsShown(!isShown); setMenuState(!menuState)}}
    >
      <button
        id="dropdownButton"
        className=" hover:bg-blue-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {label}{' '}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      {isShown && (
        <div
          id="dropdownMenu"
          className="z-10 absolute bg-white  divide-gray-100 rounded shadow  dark:bg-gray-700"
        >
          <ul className="py-1 text-sm divide-y text-gray-700 dark:text-gray-200 px-2">
            {content.map(({ name, href }, i) => (
              <li
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Link href={href}>
                  <a
                    onClick={() => {
                      setIsShown(!isShown);
                      setMenuState(!menuState);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropDownButton;
