import React, { useState } from 'react';
import { MenuAlt3Icon } from '@heroicons/react/solid';
import { HashLink } from 'react-router-hash-link';

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
          className="fixed -top-2 left-4 z-20 font-black text-purple-r text-9xl cursor-pointer"
        >
          ×
        </button>
      )}
      <nav
        className={`top-0 right-0 fixed bg-tron-t w-[100vw] h-full z-10 ${
          isOpen
            ? 'translate-x-0 shadow-[0px_0px_0px_500px_#FF30AA]'
            : 'translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
        } ease-in-out duration-500`}
      >
        <ul className="h-[80%] flex flex-col justify-center items-center gap-4">
          <HashLink
            smooth
            to="/#home"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide"
          >
            ACCUEIL
          </HashLink>
          <HashLink
            smooth
            to="/#projets"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide"
          >
            MES PROJETS
          </HashLink>
          <HashLink
            smooth
            to="/#apropos"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide"
          >
            A PROPOS
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(!isOpen)}
            className="text-acid-w text-4xl font-black hover:text-white-w hover:text-5xl tracking-wide"
          >
            CONTACTEZ MOI
          </HashLink>
        </ul>
      </nav>
    </>
  );
}

export default Header;
