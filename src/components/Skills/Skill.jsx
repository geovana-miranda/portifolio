const Skill = ({ icon, text, color }) => {
  return (
    <div className={`flex items-center gap-2 text-xl ${color} rounded-3xl px-4 py-1 border-2 border-gray-600 text-gray-800`}>
      <i class={icon}></i>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default Skill;
