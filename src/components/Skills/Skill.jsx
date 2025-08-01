const Skill = ({ icon, text, color }) => {
  return (
    <div
      className={`flex flex-col items-center rounded-t-4xl rounded-bl-4xl ${color} border-3 p-2 w-24 md:w-28 text-white border-black shadow-[4px_4px_0px_black] hover:translate-x-[-4px] hover:translate-y-[-8px] transition hover:shadow-[10px_10px_0px_black]`}
    >
      <div className={`text-6xl rounded-lg w-20 text-center`}>
        <i class={icon}></i>
      </div>
      <p className="py-1 font-semibold">{text}</p>
    </div>
  );
};

export default Skill;
