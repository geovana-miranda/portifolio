const Card = ({ name, image, description, color, colorButton, github, vercel }) => {
  return (
    <div className="w-68 h-[445px] rounded-2xl border-2 border-black shadow-[6px_6px_0px_black] bg-white mb-6 flex flex-col">
      <div className={`${color} rounded-t-2xl p-4 border-b-2`}>
        <h3 className="text-center text-xl font-bold border-black p-2">
          {name}
        </h3>
      </div>
      <img
        src={image}
        alt="preview do projeto"
        className="h-[180px] w-full object-contain "
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm mb-2">{description}</p>
        <div className="flex justify-between mt-auto">
          <a
            href={github}
            target="_blank"
            className={`flex items-center border-2 border-black text-lg px-2 shadow-[2px_2px_0px_black] cursor-pointer hover:scale-110 transition`}
          >
            <i class="fa fa-code" aria-hidden="true"></i>{" "}
          </a>
          <a
            href={vercel}
            target="_blank"
            className={`${colorButton} text-white flex items-center gap-2 font-bold border-2 border-black px-3 py-1 shadow-[4px_4px_0px_black] hover:scale-110 transition`}
          >
            Visitar
            <i class="fa fa-link" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
