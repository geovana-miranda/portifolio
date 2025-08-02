import { useInView } from "../../hooks/useInView";

const Skill = ({ icon, text, color }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center rounded-t-4xl rounded-bl-4xl ${color} border-3 p-2 w-24 md:w-28 text-white border-black shadow-[4px_4px_0px_black] hover:translate-x-[-4px] hover:translate-y-[-8px] hover:shadow-[10px_10px_0px_black] transition-opacity duration-[2.5s] ease ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`text-6xl rounded-lg w-20 text-center`}>
        <i className={icon}></i>
      </div>
      <p className="py-1 font-semibold">{text}</p>
    </div>
  );
};

export default Skill;
