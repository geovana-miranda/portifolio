import Card from "./Card";
import { projects } from "../../data/projects";
import { useInView } from "../../hooks/useInView";


const Projects = () => {
  const [ref, isVisible] = useInView();
  
  return (
    <section ref={ref} className="py-16 bg-teal-300 border-y-4 border-dashed">
      <h2 className={`transition-all duration-[1s] ease ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-30"
        } text-4xl text-center mb-12 font-bold text-blue-700`}>Projetos</h2>
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
          github={project.github}
          vercel={project.vercel}
        />
      ))}
      </div>
    </section>
  );
};

export default Projects;
