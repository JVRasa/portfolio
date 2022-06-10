import React, { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

function ModalPro1() {
  const { is2ndModalOpen, setIs2ndModalOpen } = useContext(ModalContext);
  return (
    <section
      className={`bg-acid-w h-[100vh] fixed top-0 left-0 w-[100vw] ${
        is2ndModalOpen
          ? 'translate-x-0 shadow-[500px_0px_0px_0px_#FF30AA]'
          : '-translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
      } ease-in-out duration-[500ms]`}
    >
      <div className="flex justify-end w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl md:text-[10rem] font-black text-purple-r"
          onClick={() => setIs2ndModalOpen(!is2ndModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto md:w-[60%] md:-mt-10">
        <div className="text-tron-t text-2xl mb-2 md:text-xl">
          PROJET EN FORMATION
        </div>
        <div className="border-4 border-tron-t px-4 py-2 md:py-4 mb-2 md:w-[40%]">
          <h1 className="text-tron-t text-7xl font-bold text-center md:text-6xl">
            JETREE
          </h1>
        </div>
        <h2 className="text-tron-t text-2xl md:text-xl">
          hackathon - 24 heures
        </h2>
        <p className="text-white-w text-xl my-5 font-light">
          Réalisation d'un site recensant différents points de collecte à Lyon
          (verre, déchèterie, textile, compost) sur une carte.
        </p>
        <p className="text-white-w text-xl my-5 font-light">
          <span className="font-bold">TECHNOS</span> : <br />- ReactJs, Leaflet
          <br /> - NodeJs, création d'une API qui contient les points de
          collecte
        </p>

        <p className="text-white-w text-xl font-light md:text-right">
          <span className="border-none md:border-b-2 md:border-b-white-w md:border-dashed md:pb-1">
            Projet en groupe de 5 personnes
          </span>
        </p>
      </article>

      <div className="bg-tron-t md:mx-auto mx-20 my-10 text-3xl p-4 md:w-[15%]">
        <p className="text-center text-acid-w">VISITER</p>
      </div>
      <p className="text-white-w text-xl font-light text-center">
        <span className="font-bold">Réalisé en</span> : Mai 2022
      </p>
    </section>
  );
}

export default ModalPro1;
