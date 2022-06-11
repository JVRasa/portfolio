import React, { useContext } from 'react';
import ModalContext from '../contexts/ModalContext';

function ModalPro1() {
  const { is3rdModalOpen, setIs3rdModalOpen } = useContext(ModalContext);
  return (
    <section
      className={`bg-acid-w h-[100vh] fixed top-0 left-0 w-[100vw] ${
        is3rdModalOpen
          ? 'translate-x-0 shadow-[500px_0px_0px_0px_#FF30AA] overflow-auto'
          : '-translate-x-full shadow-[0px_0px_0px_0px_#FF30AA]'
      } ease-in-out duration-700`}
    >
      <div className="flex w-[90%] mx-auto mt-0">
        <button
          type="button"
          className="text-8xl md:text-[10rem] font-black text-purple-r hover:-rotate-90 ease-in-out duration-500"
          onClick={() => setIs3rdModalOpen(!is3rdModalOpen)}
        >
          ×
        </button>
      </div>
      <article className="w-[90%] m-auto md:w-[60%] md:-mt-16">
        <div className="text-tron-t text-2xl mb-2 md:text-xl">
          PROJET EN FORMATION
        </div>
        <div className="border-4 border-tron-t inline-block px-4 py-2 md:py-4 mb-2">
          <h1 className="text-tron-t text-3xl font-bold md:text-5xl">
            NANAR PRODUCTION
          </h1>
        </div>
        <h2 className="text-tron-t text-2xl md:text-xl">
          client fictif - 6 semaines
        </h2>
        <p className="text-white-w text-xl my-5 font-light">
          Réalisation d'un site avec pour thématique les nanars : suggestion de
          nanars suite à un quiz, recherche d'un nanar via l'utilisation de
          filtres, poster une annonce pour rencontrer d'autres amateurs de
          nanars
        </p>
        <p className="text-white-w text-xl my-5 font-light">
          <span className="font-bold">TECHNOS</span> : <br />- ReactJs, API
          (IMDb), Material UI
          <br /> - NodeJs, création d'une API (annonces utilisateurs)
          <br /> - Méthode agile SCRUM
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
            href="https://films-claques.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="bg-tron-t text-acid-w font-bold px-8 py-4 hover:text-4xl cursor-pointer no-underline ease-in-out duration-300"
          >
            VISITER
          </a>
        </p>
      </div>
      <p className="text-white-w text-xl font-light text-center pb-6">
        <span className="font-bold">Réalisé en</span> : Avril - Mai 2022
      </p>
    </section>
  );
}

export default ModalPro1;
