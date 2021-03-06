import React, { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

function ModalPro1() {
  const { is1stModalOpen, setIs1stModalOpen } = useContext(ModalContext);
  return (
    <section
      className={`bg-acid-w h-screen fixed top-0 left-0 w-[100vw] ${
        is1stModalOpen
          ? 'translate-x-0 shadow-[600px_0px_0px_0px_#FF30AA] overflow-auto'
          : '-translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
      } ease-in-out duration-700`}
    >
      <div className="flex w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl md:text-[10rem] font-black text-purple-r hover:-rotate-90 ease-in-out duration-500"
          onClick={() => setIs1stModalOpen(!is1stModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto md:w-[60%] md:-mt-14">
        <div className="text-tron-t text-2xl mb-2 md:text-xl">
          PROJET EN FORMATION
        </div>
        <div className="border-4 border-tron-t inline-block px-4 py-2 md:py-4 mb-2">
          <h1 className="text-tron-t text-7xl font-bold text-center md:text-6xl">
            LOCA-B
          </h1>
        </div>
        <h2 className="text-tron-t text-2xl md:text-xl">
          avec client - 10 semaines
        </h2>
        <p className="text-white-w text-xl my-5 font-light">
          Réalisation d'un site de location de matériel de puériculture.
        </p>
        <p className="text-white-w text-xl my-5 font-light">
          <span className="font-bold">TECHNOS</span> : <br />- NextJs
          <br /> - Prisma, création d'APIs, back-office
          <br /> - Cypress (TDD)
          <br /> - Méthode agile SCRUM
        </p>

        <p className="text-white-w text-xl font-light md:text-right">
          <span className="border-none md:border-b-2 md:border-b-white-w md:border-dashed md:pb-1">
            Projet en groupe de 6 personnes
          </span>
        </p>
      </article>

      <p className="text-white-w pt-8 text-xl font-light text-center pb-6">
        <span className="font-bold">En cours de réalisation</span> (Mai -
        Juillet 2022)
      </p>
    </section>
  );
}

export default ModalPro1;
