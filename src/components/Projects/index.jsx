import Card from "./Card";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl text-center mt-4 mb-8 font-bold">Projetos</h2>
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
    </div>
  );
};

export default Projects;
