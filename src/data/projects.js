import minhaEstanteImg from "../assets/projects/minhaestante/home.png";
import flashlearnImg from "../assets/projects/flashlearn/flashlearn.png";
import JSPhoneImg from "../assets/projects/JSPhone/screen_home.png";
import lolacosmeticsImg from "../assets/projects/lolacosmetics.png";

export const projects = [
  {
    id: 1,
    name: "Minha Estante",
    image: minhaEstanteImg,
    description:
      "App para leitores que desejam organizar suas leituras. Com ele, é possível buscar livros, adicioná-los à estante pessoal, avaliá-los, favoritá-los e escrever resenhas.",
    color: "bg-lime-200",
    colorButton: "bg-fuchsia-400",
    github: "https://github.com/geovana-miranda/minha-estante",
    vercel: "https://minha-estante-kappa.vercel.app/"
  },
  {
    id: 2,
    name: "Flashlearn",
    image: flashlearnImg,
    description:
      "Flashlearn é um app de flashcards para estudo, onde é possível criar baralhos, adicionar cards e revisar conteúdos de forma interativa.",
    color: "bg-cyan-200",
    colorButton: "bg-purple-500",
    github: "https://github.com/geovana-miranda/flashlearn",
    vercel: "https://flashlearn-one.vercel.app/"
  },
  {
    id: 3,
    name: "JSPhone",
    image: JSPhoneImg,
    description:
      "Mini sistema de apps em JavaScript com funcionalidades como calculadora, conversor de moedas, to-do list e cronômetro.",
    color: "bg-green-300",
    colorButton: "bg-red-500",
    github: "https://github.com/geovana-miranda/JSPhone",
    vercel: "https://js-phone.vercel.app/"

  },
  {
    id: 4,
    name: "Lola Cosmetics",
    image: lolacosmeticsImg,
    description: "Este é um clone da página da Lola Cosmetics.",
    color: "bg-pink-200",
    colorButton: "bg-green-500",
    github: "https://github.com/geovana-miranda/lolacosmetics-clone",
    vercel: "https://lolacosmetics-clone.vercel.app/"

  },
];
