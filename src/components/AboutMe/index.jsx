import aboutme from "../../assets/aboutme.jpeg";
import { useEffect, useState, useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="py-16 bg-pink-300">
      <h2
        className={`transition-all duration-[1s] ease-in-out ${
          isVisible ? "opacity-100 scale-100 " : "opacity-0 scale-80"
        } text-4xl text-center font-bold mb-12 text-red-500`}
      >
        Quem sou eu?
      </h2>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
        <div
          className={`transition-all duration-[1.5s] ease-in-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-30"
          }`}
        >
          <div className="relative my-6 md:my-0">
            <div className="w-60 absolute -top-4 inset-y-2 inset-x-3 bg-red-500 rounded-t-full border-4 z-0 "></div>
            <img
              src={aboutme}
              alt=""
              className="relative z-10 border-2 w-60 rounded-t-full "
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-center gap-8 font-semibold text-white transition-all duration-[1.5s] ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
          } flex flex-col gap-8 text-center px-8 text-sm md:w-lg md:px-0 md:text-base lg:w-2xl`}
        >
          <p>
            Sou Geovana Miranda, desenvolvedora Front-End focada em criar interfaces modernas, funcionais e criativas.
          </p>
          <p>
            Sou estudante de <span className="bg-red-400 px-2 font-medium">Sistemas para Internet na PUC Minas</span> e estou sempre buscando evoluir por meio de projetos, cursos e desafios práticos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
