import Form from "./Form";
import SocialButton from "./SocialButton";
import TalkToMe from "./TalkToMe";

const Contact = () => {
  return (
    <section className="py-16 mx-auto bg-blue-600">
      <h2 className="text-4xl text-center mb-12 font-bold text-green-500">
        Contato
      </h2>

      <div className="flex flex-col md:flex-row md:items-center lg:justify-center w-sm md:w-3xl lg:w-4xl mx-auto gap-12">
        <Form />

        <div className="w-80 mx-auto md:w-lg h-[380px] border-2 rounded-2xl flex flex-col justify-around items-center p-8 bg-white shadow-[5px_5px_0px_black] md:flex md:flex-col md:gap-4">
          <TalkToMe />

          <div className="mx-auto items-center flex flex-col justify-center gap-4 flex-wrap lg:w-full">
            <h4 className="text-xl font-bold text-green-500 ">Minhas redes:</h4>
            <SocialButton icon="devicon-github-original" name="Github" link="https://github.com/geovana-miranda" />
            <SocialButton icon="devicon-linkedin-plain" name="Linkedin" link="https://www.linkedin.com/in/geovana-miranda/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
