import { skills } from "../../data/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="py-16 mx-auto border-y-4 border-dashed bg-green-300">
      <h2 className="text-4xl text-center mb-12 font-bold">Habilidades</h2>
      <div className="mx-auto flex justify-center gap-6 flex-wrap md:w-lg lg:w-full">
        {skills.map((skill) => (
          <Skill icon={skill.icon} text={skill.text} color={skill.color} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
