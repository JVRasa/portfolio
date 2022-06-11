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
      } ease-in-out duration-[500ms]`}
    >
      <div className="flex w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl md:text-[10rem] font-black text-purple-r"
          onClick={() => setIs4thModalOpen(!is4thModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto md:w-[60%] md:-mt-10">
        <div className="text-tron-t text-2xl mb-2 md:text-xl">
          PROJET EN FORMATION
        </div>
        <div className="border-4 border-tron-t px-4 py-2 md:py-4 mb-2 md:w-[60%]">
          <h1 className="text-tron-t text-7xl font-bold md:text-6xl">
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

      <p className="text-white-w pt-8 text-xl font-light text-center pb-6">
        <span className="font-bold">Réalisé en</span> : Mars 2022
      </p>
    </section>
  );
}

export default ModalPro1;
