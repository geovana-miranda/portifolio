import aboutme from "../../assets/aboutme.jpeg";

const AboutMe = () => {
  return (
    <section className="py-8 bg-pink-300 border-b-2">
      <h2 className="text-3xl text-center font-bold mb-6 text-red-500">
        Quem sou eu?
      </h2>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
        <div>
          <div className="relative">
            <div className="w-56 absolute -top-4 inset-y-2 inset-x-3 bg-red-500 rounded-t-full border-3 z-0"></div>
            <img
              src={aboutme}
              alt=""
              className="relative z-10 border-2 w-56 rounded-t-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center px-8 text-sm md:w-lg md:px-0 md:text-base lg:w-2xl">
          <p>
            Sou estudante de <span className="bg-red-400 px-2 font-medium">Sistemas para Internet na PUC Minas</span>e estou em busca de uma oportunidade de estágio em
            <span className="bg-red-400 px-2 font-medium">desenvolvimento front-end</span>
            para iniciar minha trajetória profissional na área de tecnologia.
          </p>
          <p>
            Tenho como objetivo construir uma carreira sólida como
            desenvolvedora, contribuindo com projetos que impactem positivamente
            a vida das pessoas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
