import React, { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

function ModalPro1() {
  const { is1stModalOpen, setIs1stModalOpen } = useContext(ModalContext);
  return (
    <section
      className={`bg-acid-w h-[100vh] fixed top-0 left-0 w-[100vw] ${
        is1stModalOpen
          ? 'translate-x-0 shadow-[400px_0px_0px_0px_#FF30AA]'
          : '-translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
      } ease-in-out duration-[400ms]`}
    >
      <div className="flex justify-end w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl font-black text-purple-r"
          onClick={() => setIs1stModalOpen(!is1stModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto">
        <div className="text-tron-t text-2xl mb-2">PROJET EN FORMATION</div>
        <div className="border-4 border-tron-t px-4 py-2 md:py-4 mb-2">
          <h1 className="text-tron-t text-7xl font-bold text-center">JETREE</h1>
        </div>
        <h2 className="text-tron-t text-2xl">hackathon - 24 heures</h2>
        <p className="text-white-w text-xl my-5 font-light">
          Réalisation d'un site recensant différents points de collecte à Lyon
          (verre, déchèterie, textile, compost) sur une carte.
        </p>
        <p className="text-white-w text-xl font-light">
          Projet en groupe de 5 personnes
        </p>
      </article>
      <div className="bg-tron-t shadow-[15px_15px_0px_0px_#FF30AA] mx-20 my-10 text-3xl p-4">
        <p className="text-center font-light">VISITER</p>
      </div>
      <article className="w-[90%] m-auto">
        <h3 className="text-purple-r text-2xl font-bold my-2">FRONT END</h3>
        <ul className="text-tron-t list-disc ml-8 text-xl font-light">
          <li>ReactJs</li>
          <li>Leaflet</li>
        </ul>
        <h3 className="text-purple-r text-2xl font-bold my-2">BACK END</h3>
        <ul className="text-tron-t list-disc ml-8 text-xl font-light">
          <li>NodeJs</li>
          <li>Création d'API</li>
        </ul>
      </article>
    </section>
  );
}

export default ModalPro1;
