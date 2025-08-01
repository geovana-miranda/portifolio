import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    const whatsAppMessage = `Olá, meu nome é ${name}, ${message}`;
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const whatsappURL = `https://wa.me/5511941863282?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <form
      className="w-80 mx-auto md:w-lg h-[380px] border-2 rounded-2xl flex flex-col items-start gap-4 p-8 bg-white shadow-[5px_5px_0px_black]"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-2 w-full">
        <span className="font-bold">Nome:</span>
        <input
          type="text"
          className="border-2 rounded-lg py-1 pl-2 w-full shadow-[4px_4px_0px_black] focus:outline-none focus:ring-0 "
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="flex flex-col gap-2 w-full">
        <span className="font-bold">Mensagem:</span>
        <textarea
          type="text"
          rows={3}
          className="w-full border-2 rounded-lg py-1 px-2 shadow-[4px_4px_0px_black] focus:outline-none focus:ring-0 "
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </label>
      <input
        type="submit"
        value="Enviar"
        className="bg-black text-white border-2 py-[6px] mt-2 w-full rounded-lg font-medium cursor-pointer hover:bg-white hover:text-black transition"
      />
      <span className="text-xs text-gray-600">
        Ao clicar em "Enviar", você será redirecionado para o WhatsApp com a
        mensagem preenchida automaticamente.
      </span>
    </form>
  );
};

export default Form;
