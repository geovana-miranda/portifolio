import { useInView } from "../../hooks/useInView";

const Card = ({ name, image, description, color, colorButton, github, vercel }) => {
const [ref, isVisible] = useInView();

  return (
    <div ref={ref} className={`transition-all duration-[2s] ease-in-out ${
            isVisible ? "opacity-100 scale-100 " : "opacity-0 scale-80"
          } w-80 h-auto md:w-md md:h-[550px] rounded-2xl border-2 border-black shadow-[6px_6px_0px_black] bg-white mb-6 flex flex-col`}>
      <div className={`${color} rounded-t-2xl p-4 border-b-2`}>
        <h3 className="text-center text-xl font-bold border-black p-2">
          {name}
        </h3>
      </div>
      <img
        src={image}
        alt="preview do projeto"
        className="h-[200px] md:h-[280px] w-full object-contain "
      />
      <div className="p-4 md:px-8 md:py-6 flex flex-col flex-1">
        <p className="text-sm mb-6">{description}</p>
        <div className="flex justify-end gap-6 mt-auto">
          <a
            href={github}
            target="_blank"
            className={`flex items-center border-2 border-black text-lg px-2 shadow-[2px_2px_0px_black] cursor-pointer hover:scale-110 transition`}
          >
            <i className="fa fa-code" aria-hidden="true"></i>{" "}
          </a>
          <a
            href={vercel}
            target="_blank"
            className={`${colorButton} text-white flex items-center gap-2 font-bold border-2 border-black px-3 py-1 shadow-[4px_4px_0px_black] hover:scale-110 transition`}
          >
            Visitar
            <i className="fa fa-link" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
