import { skills } from "../../data/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="p-4 flex flex-wrap justify-center gap-2 mx-auto">
      {skills.map((skill) => (
        <Skill icon={skill.icon} text={skill.text} color={skill.color} />
      ))}
    </section>
  );
};

export default Skills;
