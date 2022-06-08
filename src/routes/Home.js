import React from 'react';

function Home() {
  return (
    <>
      <section id="home" className="h-screen md:flex bg-acid-w">
        <div className="w-4/5 md:w-max m-auto md:ml-28 space-y-2 ">
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
        <div className="hidden md:flex md:items-end">indeed / github</div>
      </section>
      <section id="projets" className="py-6 md:py-16">
        <h1 className="pb-6 text-acid-w text-5xl font-bold text-center">
          MES PROJETS
        </h1>
        <div className="w-4/5 md:w-3/5 m-auto md:h-[70vh] grid md:grid-cols-3 md:grid-rows-3 gap-4">
          <article className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 md:h-80 relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://i.picsum.photos/id/247/600/600.jpg?hmac=pZcBkwRClP5oEJ8z23ub9EonmQ37jS212yQWJf_NtN4"
              alt="jetree projet"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-top-80 hover:opacity-70 ease-in duration-300">
              <div className="h-80"> </div>
              <div className="bg-acid-w h-80">jetree</div>
            </div>
          </article>
          <article className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-4 bg-[url('https://i.picsum.photos/id/524/600/600.jpg?hmac=OErekoRIkHPY98HCtPwtUzhoWLwL2GXXelUYvOOSD8o')] relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 right-0 hover:-translate-y-full hover:opacity-70 ease-in duration-300">
              <div className="h-full"> </div>
              <div className="bg-acid-w h-full">nanar production</div>
            </div>
          </article>
          <article className="md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 md:h-40">
            <img
              className="object-cover w-full h-full"
              src="https://i.picsum.photos/id/959/600/600.jpg?hmac=8iYxVGEbg0wg2uiUuOFW0JUeo5BxV-eif0rRn4Rlr8M"
              alt="jetree projet"
            />
          </article>
        </div>
      </section>
      <section id="apropos" className="bg-acid-w pb-12">
        <h1 className="pb-6 pt-10 text-pacman-y text-5xl font-bold text-center">
          A PROPOS
        </h1>
        <div className="bg-white-w shadow-[20px_20px_0px_0px_#FF30AA] w-10/12 md:w-3/5 m-auto p-3">
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
            ReactJs, NodeJs, Javascript, SQL, CSS, HTML.
          </p>
          <p className="text-xl my-3 font-semibold text-acid-w">
            ET POUR FINIR... ?
          </p>
          <p className="text-xl">
            Je suis incollable sur les farming sim games et j’adore la couture !
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
