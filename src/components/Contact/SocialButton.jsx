const SocialButton = ({ icon, name, link }) => {
  return (
    <a href={link} target="_blank" className="border w-40 flex items-center justify-center gap-2 text-xl py-2 shadow-[4px_4px_0px_black] bg-white cursor-pointer hover:scale-110 transition">
      <i className={icon}></i>
      <p className="font-medium">{name}</p>
    </a>
  );
};

export default SocialButton;
