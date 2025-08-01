import profile from "../assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-indigo-500 flex flex-col items-center gap-6 py-20 md:flex-row md:justify-center md:gap-16">
      <div>
        <div className="relative">
          <div className="w-64 absolute top-4 -inset-y-4 inset-x-5 bg-lime-400 border-3 z-0 shadow-[5px_5px_0px_black]"></div>
          <img src={profile} alt="" className="relative z-10 border-3 w-64" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 font-semibold text-white">
        <h2 className="text-2xl md:text-3xl">Olá! Eu sou Geovana Miranda</h2>
        <h1 className="text-2xl md:text-4xl">Desenvolvedora Front-End</h1>
        <a href="/CV_Geovana.pdf" download className="flex items-center gap-2 mt-4 bg-lime-400 text-black font-bold py-2 px-8 border-3 rounded drop-shadow-[4px_4px_0_black] md:px-20 md:text-lg cursor-pointer hover:translate-x-[3px] hover:translate-y-[3px] transition">
          <span>Baixar CV</span>
          <i class="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
