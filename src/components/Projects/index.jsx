import Card from "./Card";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section className="py-8 bg-teal-300">
      <h2 className="text-3xl text-center mb-12 font-bold">Projetos</h2>
      <div className="mx-auto flex justify-center gap-6 flex-wrap md:w-2xl lg:w-full">
        {projects.map((project) => (
        <Card
          key={project.id}
          id={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          color={project.color}
          colorButton={project.colorButton}
          colorButtonHover={project.colorButtonHover}
        />
      ))}
      </div>
    </section>
  );
};

export default Projects;
