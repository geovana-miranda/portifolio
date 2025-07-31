import profile from "../assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-violet-400 flex flex-col items-center gap-6 py-12 md:flex-row md:justify-center md:gap-16">
      <div className="">
        <div className="relative">
          <div className="w-52 absolute top-1 inset-y-0 inset-x-4 bg-amber-400 rounded-full border-3 z-0"></div>
          <img
            src={profile}
            alt=""
            className="relative z-10 border w-52 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 font-semibold">
        <h2 className="text-xl md:text-2xl">Olá! Eu sou Geovana Miranda</h2>
        <h1 className="text-2xl md:text-4xl">Desenvolvedora Front-End</h1>
        <button className="mt-4 bg-amber-400 text-black font-semibold py-2 px-8 border-2 rounded drop-shadow-[4px_4px_0_rgba(0,0,0,0.7)] md:px-16">
          Baixar CV
        </button>          
      </div>
    </section>
  );
};

export default HeroSection;
