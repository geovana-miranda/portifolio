import Form from "./Form";
import SocialButton from "./SocialButton";
import TalkToMe from "./TalkToMe";

const Contact = () => {
  return (
    <section className="py-10 mx-auto border-t-2 border-dashed bg-orange-400">
      <h2 className="text-3xl text-center mb-12 font-bold">Contato</h2>

      <div className="flex flex-col md:flex-row md:items-center lg:justify-between w-80 md:w-2xl lg:w-4xl mx-auto gap-8">
        <div className="block md:hidden">
          <TalkToMe />
        </div>

        <Form />

        <div className="md:flex md:flex-col md:items-center md:gap-12 max-w-sm">
          <div className="hidden md:block">
            <TalkToMe />
          </div>
          <div className="mx-auto items-center flex flex-col justify-center gap-6 flex-wrap lg:w-full">
            <h4 className="font-medium text-xl">Minhas redes:</h4>
            <SocialButton icon="devicon-github-original" name="Github" />
            <SocialButton icon="devicon-linkedin-plain" name="Linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
