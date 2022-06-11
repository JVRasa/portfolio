import React, { useState } from 'react';
import { MenuAlt3Icon } from '@heroicons/react/solid';
import { HashLink } from 'react-router-hash-link';
import linkedIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          className="bg-tron-t p-4 fixed top-2 right-2 z-10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuAlt3Icon className="h-8 w-8 text-acid-w" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed -top-2 left-4 z-20 font-black text-purple-r text-9xl cursor-pointer hover:-rotate-90 ease-in-out duration-500"
        >
          ×
        </button>
      )}
      <nav
        className={`top-0 right-0 fixed bg-tron-t w-[100vw] h-full z-10 ${
          isOpen
            ? 'translate-x-0 shadow-[0px_0px_0px_600px_#FF30AA]'
            : 'translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
        } ease-in-out duration-500`}
      >
        <ul className="h-[90%] flex flex-col justify-center items-center gap-4 md:gap-6 md:h-screen text-center">
          <HashLink
            smooth
            to="/#home"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide md:text-5xl md:hover:text-6xl"
          >
            ACCUEIL
          </HashLink>
          <HashLink
            smooth
            to="/#projets"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide md:text-5xl md:hover:text-6xl"
          >
            MES PROJETS
          </HashLink>
          <HashLink
            smooth
            to="/#apropos"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide md:text-5xl md:hover:text-6xl"
          >
            A PROPOS
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide md:text-5xl md:hover:text-6xl"
          >
            ME CONTACTER
          </HashLink>
          <div className="flex items-center mt-6 gap-4 md:gap-8">
            <a
              href="https://www.linkedin.com/in/julie-rasa/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedIcon}
                alt="linkedin icon"
                className="w-20 h-20 cursor-pointer hover:scale-125"
              />
            </a>{' '}
            <a
              href="https://github.com/JVRasa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubIcon}
                alt="github icon"
                className="w-16 h-16 cursor-pointer hover:scale-125"
              />
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
