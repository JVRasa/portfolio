import React, { useContext } from 'react';
import ModalPro1 from '../components/ModalPro1';
import ModalPro2 from '../components/ModalPro2';
import ModalPro3 from '../components/ModalPro3';
import ModalPro4 from '../components/ModalPro4';
import ModalContext from '../contexts/ModalContext';
import proJeTree from '../img/projet.jpg';
import linkedIcon from '../img/linkedinWhite.png';
import githubIcon from '../img/githubWhite.png';

function Home() {
  const {
    is1stModalOpen,
    setIs1stModalOpen,
    is2ndModalOpen,
    setIs2ndModalOpen,
    is3rdModalOpen,
    setIs3rdModalOpen,
    is4thModalOpen,
    setIs4thModalOpen,
  } = useContext(ModalContext);
  return (
    <>
      <section id="home" className="h-screen md:flex">
        <div className="w-4/5 md:w-max m-auto md:ml-28 space-y-2 h-[85vh] flex flex-col justify-center">
          <p className="text-tron-t uppercase text-3xl">Portofolio de</p>
          <div className="border-4 border-tron-t px-4 py-2 md:py-4">
            <h1 className="text-tron-t uppercase text-[68px] md:text-8xl md:text-center font-bold">
              Julie R.
            </h1>
          </div>
          <h2 className="text-tron-t text-3xl">
            développeuse web fullstack junior
          </h2>
        </div>
        <div className="hidden md:flex md:items-end md:justify-end md:flex-col md:mr-4 md:mb-6">
          <a
            href="https://www.linkedin.com/in/julie-rasa/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedIcon}
              alt="linkedin icon"
              className="w-16 h-16 cursor-pointer hover:scale-125"
            />
          </a>{' '}
          <a href="https://github.com/JVRasa" target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              alt="github icon"
              className="w-14 h-14 mr-1 cursor-pointer hover:scale-125"
            />
          </a>
        </div>
      </section>
      <section id="projets" className="bg-white-w py-6 h-full md:py-16">
        <h1 className="pb-6 text-acid-w text-5xl font-bold text-center">
          MES PROJETS
        </h1>
        <div className="w-4/5 md:w-3/5 h-[150vh] md:h-[95vh] m-auto grid gap-3 grid-cols-1 md:grid-cols-3">
          <article
            className="h-full w-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${proJeTree})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-translate-y-full hover:opacity-70 ease-in duration-300">
              <div className="h-full"> </div>
              <div
                className="bg-acid-w h-full"
                onClick={() => setIs1stModalOpen(!is1stModalOpen)}
              >
                <div className="flex flex-col h-full justify-center gap-2">
                  <h2 className="text-white-w font-bold text-center text-4xl">
                    LOCA-B
                  </h2>
                  <hr className="w-4/5 h-2 bg-white-w mx-auto" />
                  <h3 className="text-white-w text-center text-xl">
                    PROJET FORMATION
                  </h3>
                  <button
                    className="bg-white-w py-4 px-8 flex mx-auto mt-10"
                    type="button"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article
            className="h-full w-full md:col-start-2 md:col-end-3 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${proJeTree})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-translate-y-full hover:opacity-70 ease-in duration-300">
              <div className="h-full"> </div>
              <div
                className="bg-acid-w h-full"
                onClick={() => setIs2ndModalOpen(!is2ndModalOpen)}
              >
                <div className="flex flex-col h-full justify-center gap-2">
                  <h2 className="text-white-w font-bold text-center text-4xl">
                    JETREE
                  </h2>
                  <hr className="w-4/5 h-2 bg-white-w mx-auto" />
                  <h3 className="text-white-w text-center text-xl">
                    PROJET FORMATION
                  </h3>
                  <button
                    className="bg-white-w py-4 px-8 flex mx-auto mt-10"
                    type="button"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article
            className="h-full w-full md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${proJeTree})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-translate-y-full hover:opacity-70 ease-in duration-300">
              <div className="h-full"> </div>
              <div
                className="bg-acid-w h-full"
                onClick={() => setIs3rdModalOpen(!is3rdModalOpen)}
              >
                <div className="flex flex-col h-full justify-center gap-2">
                  <h2 className="text-white-w font-bold text-center text-4xl">
                    NANAR PRODUCTION
                  </h2>
                  <hr className="w-4/5 h-2 bg-white-w mx-auto" />
                  <h3 className="text-white-w text-center text-xl">
                    PROJET FORMATION
                  </h3>
                  <button
                    className="bg-white-w py-4 px-8 flex mx-auto mt-10"
                    type="button"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article
            className="h-full w-full md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${proJeTree})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-translate-y-full hover:opacity-70 ease-in duration-300">
              <div className="h-full"> </div>
              <div
                className="bg-acid-w h-full"
                onClick={() => setIs4thModalOpen(!is4thModalOpen)}
              >
                <div className="flex flex-col h-full justify-center gap-2">
                  <h2 className="text-white-w font-bold text-center text-4xl">
                    SUPER <br />5 SNAKE
                  </h2>
                  <hr className="w-4/5 h-2 bg-white-w mx-auto" />
                  <h3 className="text-white-w text-center text-xl">
                    PROJET FORMATION
                  </h3>
                  <button
                    className="bg-white-w py-4 px-8 flex mx-auto mt-10"
                    type="button"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="apropos" className="pb-24">
        <h1 className="pb-6 pt-16 text-tron-t text-5xl font-bold text-center">
          A PROPOS
        </h1>
        <div className="bg-white-w shadow-[20px_20px_0px_0px_#00EEE2] w-10/12 md:w-3/5 m-auto p-3">
          <p className="text-xl">
            Hello ! Je m’appelle Julie et je suis actuellement en formation pour
            devenir développeuse web fullstack. J’ai toujours eu un attrait pour
            le design et le graphisme, ce qui m’a conduit de fil en aiguille, au
            code et au développement web. Aujourd’hui je souhaite améliorer mes
            compétences, en apprendre plus et surtout transformer une passion en
            métier.
          </p>
          <p className="text-xl my-3 font-semibold text-acid-w">MES TECHNOS</p>
          <p className="text-xl">
            ReactJs, NodeJs, NextJs, Prisma, Cypress, SQL, Javascript, CSS,
            HTML.
          </p>
          <p className="text-xl my-3 font-semibold text-acid-w">
            ET POUR FINIR... ?
          </p>
          <p className="text-xl">
            Je suis incollable sur les farming sim games et j’adore la couture !
          </p>
        </div>
      </section>
      <section id="contact" className="bg-white-w pb-12 py-6">
        <h1 className="pt-6 text-acid-w text-5xl font-bold text-center">
          <span className="md:hidden">CONTACT</span>
          <span className="hidden md:inline">ME CONTACTER</span>
        </h1>
      </section>

      <ModalPro1 />
      <ModalPro2 />
      <ModalPro3 />
      <ModalPro4 />
    </>
  );
}

export default Home;
