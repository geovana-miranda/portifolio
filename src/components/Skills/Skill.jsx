const Skill = ({ icon, text, color }) => {
  return (
    <div
      className={`flex flex-col items-center ${color} border-2 p-2 w-24 text-white border-black shadow-[4px_4px_0px_black]`}
    >
      <div className={`text-6xl rounded-lg  w-20 text-center `}>
        <i class={icon}></i>
      </div>
      <p className="py-1 font-medium">{text}</p>
    </div>
  );
};

export default Skill;
