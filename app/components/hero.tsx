import Image from "next/image";
import { FiCalendar, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#1C1C1C] px-4 py-24 md:px-8 md:py-32">
      {/* Bulle */}
      <div className="mb-12 w-full max-w-[90%] md:mb-16 md:w-auto">
        <div className="flex items-center justify-center gap-3 rounded-full border border-[#1C1C1C]/20 bg-white px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] md:gap-6 md:px-10 md:py-5">
          <Image
            src="/assets/Bulle.png"
            alt="Créer un site web vraiment unique"
            width={56}
            height={56}
            className="h-10 w-10 flex-shrink-0 md:h-14 md:w-14"
          />
          <p className="text-sm font-extrabold uppercase text-[#1C1C1C] md:text-2xl whitespace-nowrap">
            Créer un site web <span className="underline decoration-[#1C1C1C] decoration-3 underline-offset-4">vraiment</span> unique
          </p>
        </div>
      </div>

      {/* Titre principal */}
      <h1 className="mb-8 max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-white md:mb-10 md:text-6xl">
        Votre <span className="text-[#71DDAE]">site</span> doit <span className="text-[#71DDAE]">donner envie</span> de <span className="text-[#71DDAE]">rester</span>, pas de <span className="line-through decoration-[#1C1C1C]"><span className="text-[#71DDAE]">revenir</span> <span className="text-white">en</span> <span className="text-[#71DDAE]">arrière</span></span>.
      </h1>

      {/* Sous-titre */}
      <p className="mb-12 max-w-2xl px-4 text-center text-base font-medium leading-relaxed text-white/80 md:mb-16 md:text-xl">
        Design moderne, SEO solide, Suivi complet :
        <br />
        on construit un site qui retient vos visiteurs et vous apporte des résultats.
      </p>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4 px-4 md:flex-row md:px-0">
        <div className="relative w-full md:w-auto">
          <a href="#" className="flex h-12 w-full items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#71DDAE] to-[#2A9D7A] px-6 py-3 text-lg font-extrabold tracking-wide text-[#1C1C1C] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 md:h-[68px] md:w-auto md:px-8 md:py-4 md:text-2xl">
            <FiCalendar className="text-xl md:text-2xl" /> Prendre RDV
          </a>
          {/* Illustration */}
          <div className="pointer-events-none absolute -left-12 top-full -mt-4 hidden md:block">
            <Image
              src="/assets/Click.png"
              alt="Un petit click"
              width={150}
              height={100}
            />
          </div>
        </div>
        <a href="#" className="flex h-12 w-full items-center justify-center gap-3 whitespace-nowrap rounded-xl border-2 border-[#71DDAE] bg-[#1C1C1C]/50 px-6 py-3 text-base font-extrabold tracking-wide text-[#71DDAE] backdrop-blur transition-all duration-200 hover:bg-[#1C1C1C]/70 md:h-[68px] md:w-auto md:px-8 md:py-4 md:text-lg">
          Découvrir nos projets <FiDownload />
        </a>
      </div>
    </section>
  );
}