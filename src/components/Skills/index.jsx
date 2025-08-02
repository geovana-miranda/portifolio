import { skills } from "../../data/skills";
import { useInView } from "../../hooks/useInView";
import Skill from "./Skill";

const Skills = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className="py-20 mx-auto border-y-4 border-dashed bg-green-300">
      <h2
        className={`transition-all duration-[1s] ease-in-out ${
          isVisible ? "opacity-100 scale-100 " : "opacity-0 scale-80"
        } text-4xl text-center mb-12 font-bold`}
      >
        Habilidades
      </h2>
      <div className="mx-auto flex justify-center gap-6 flex-wrap md:w-lg lg:w-full">
        {skills.map((skill) => (
          <Skill key={skill.text} icon={skill.icon} text={skill.text} color={skill.color} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
