import { useInView } from "../../hooks/useInView";
import Form from "./Form";
import TalkToMe from "./TalkToMe";

const Contact = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className="py-16 mx-auto bg-blue-600">
      <h2
        className={`transition-all duration-[1s] ease ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-30"
        } text-4xl text-center mb-12 font-bold text-green-500`}
      >
        Contato
      </h2>

      <div
        className={`transition-all duration-[1s] ease ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
        } flex flex-col md:flex-row md:items-center lg:justify-center w-sm md:w-3xl lg:w-4xl mx-auto gap-12`}
      >
        <Form />
        <TalkToMe />
      </div>
    </section>
  );
};

export default Contact;
