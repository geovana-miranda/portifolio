const Card = ({id, name, image, description, color, colorButton, colorButtonHover}) => {
  return (
    <div className="w-68 h-[445px] rounded-2xl border-2 border-black shadow-[6px_6px_0px_black] bg-white mb-6 flex flex-col">
        <div className={`${color} rounded-t-2xl p-4 border-b-2`}>
          <h3 className="text-center text-xl font-bold border-black p-2">{name}</h3>
        </div>
        <img src={image} alt="preview do projeto" className="h-[180px] w-full object-contain " />
        <div className="p-4 flex flex-col flex-1">
          <p className="text-sm mb-2">{description}            
          </p>
          <div className="flex justify-end mt-auto">
            <button className={` ${colorButton} text-white font-bold border-2 border-black px-3 py-1 shadow-[4px_4px_0px_black] hover:${colorButtonHover}`}>
            Ver mais
          </button>
          </div>
        </div>
      </div>
  )
}

export default Card