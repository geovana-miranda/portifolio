import { skills } from "../../data/skills";
import Skill from "./Skill";
import { useEffect, useState } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <section className="py-20 mx-auto border-y-4 border-dashed bg-green-300">
      <h2
        className={`transition-all duration-[1s] ease-in-out ${
          visible ? "opacity-100 scale-100 " : "opacity-0 scale-80"
        } text-4xl text-center mb-12 font-bold`}
      >
        Habilidades
      </h2>
      <div className="mx-auto flex justify-center gap-6 flex-wrap md:w-lg lg:w-full">
        {skills.map((skill) => (
          <Skill icon={skill.icon} text={skill.text} color={skill.color} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
