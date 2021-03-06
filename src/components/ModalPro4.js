import React, { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

function ModalPro1() {
  const { is4thModalOpen, setIs4thModalOpen } = useContext(ModalContext);
  return (
    <section
      className={`bg-acid-w h-[100vh] fixed top-0 left-0 w-[100vw] ${
        is4thModalOpen
          ? 'translate-x-0 shadow-[500px_0px_0px_0px_#FF30AA] overflow-auto'
          : '-translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
      } ease-in-out duration-700`}
    >
      <div className="flex w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl md:text-[10rem] font-black text-purple-r hover:-rotate-90 ease-in-out duration-500"
          onClick={() => setIs4thModalOpen(!is4thModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto md:w-[60%] md:-mt-10">
        <div className="text-tron-t text-2xl mb-2 md:text-xl">
          PROJET EN FORMATION
        </div>
        <div className="border-4 border-tron-t inline-block px-4 py-2 md:py-4 mb-2">
          <h1 className="text-tron-t text-6xl font-bold md:text-6xl">
            SUPER 5 SNAKE
          </h1>
        </div>
        <h2 className="text-tron-t text-2xl md:text-xl">
          sans client - 2 semaines
        </h2>
        <p className="text-white-w text-xl my-5 font-light">
          Réalisation d'un jeu snake
        </p>
        <p className="text-white-w text-xl my-5 font-light">
          <span className="font-bold">TECHNOS</span> : <br />- Javascript
          <br />- Création de plusieurs paramètres modifiables : le son, la
          difficulté, un nightmode
          <br />- possibilité d’enregistrer son score et d’apparaître dans un
          classement
        </p>

        <p className="text-white-w text-xl font-light md:text-right">
          <span className="border-none md:border-b-2 md:border-b-white-w md:border-dashed md:pb-1">
            Projet en groupe de 5 personnes
          </span>
        </p>
      </article>

      <div className="my-10  mt-12 text-3xl">
        <p className="text-center ">
          <a
            href="https://stupendous-croquembouche-d49652.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="bg-tron-t text-acid-w font-bold px-8 py-4 hover:text-4xl cursor-pointer no-underline ease-in-out duration-300"
          >
            VISITER
          </a>
        </p>
      </div>
      <p className="text-white-w text-xl font-light text-center pb-6">
        <span className="font-bold">Réalisé en</span> : Mars 2022
      </p>
    </section>
  );
}

export default ModalPro1;
