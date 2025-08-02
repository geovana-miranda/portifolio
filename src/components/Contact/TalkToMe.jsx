import SocialButton from "./SocialButton";

const TalkToMe = () => {
  return (
    <div className="w-80 mx-auto md:w-lg h-[380px] border-2 rounded-2xl flex flex-col justify-around items-center p-4 bg-white shadow-[5px_5px_0px_black] md:flex md:flex-col">
      <div className="flex flex-col items-center gap-4">
        <h4 className="font-bold text-xl text-green-500">
          Vamos trabalhar juntos?
        </h4>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="text-green-500 text-xl">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <p className="text-base text-center font-semibold">
              182geovana@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-green-500 text-xl">
              <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
            </div>
            <p className="text-base text-center font-semibold">
              (11) 9-4186-3282
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto items-center flex flex-col justify-center gap-4 flex-wrap lg:w-full">
            <h4 className="text-xl font-bold text-green-500 ">Minhas redes:</h4>
            <SocialButton
              icon="devicon-github-original"
              name="Github"
              link="https://github.com/geovana-miranda"
            />
            <SocialButton
              icon="devicon-linkedin-plain"
              name="Linkedin"
              link="https://www.linkedin.com/in/geovana-miranda/"
            />
          </div>
    </div>
  );
};

export default TalkToMe;
