const SocialButton = ({icon, name}) => {
  return (
    <div className="border w-40 flex items-center justify-center gap-2 text-xl py-2 shadow-[4px_4px_0px_black] bg-white">
              <i class={icon}></i>
              <p className="font-medium">{name}</p>
            </div>
  )
}

export default SocialButton