import React from "react";

const Form = () => {
  return (
    <form className="max-w-sm border-2 rounded-2xl flex flex-col items-start gap-4 p-8 bg-white shadow-[4px_4px_0px_black]">
      <label className="flex flex-col gap-2 w-full">
        <span className="font-medium">Nome:</span>
        <input
          type="text"
          className="border-2 rounded-lg py-1 pl-2 w-full shadow-[4px_4px_0px_black]"
          placeholder="Digite seu nome..."
        />
      </label>
      <label className="flex flex-col gap-2 w-full">
        <span className="font-medium">Mensagem:</span>
        <textarea
          type="text"
          rows={3}
          className="w-full border-2 rounded-lg py-1 px-2 shadow-[4px_4px_0px_black]"
          placeholder="Digite sua mensagem..."
        ></textarea>
      </label>
      <input
        type="submit"
        value="Enviar"
        className="bg-black text-white  py-[6px] mt-2 w-full rounded-lg font-medium"
      />
      <span className="text-xs text-gray-600">Ao clicar em "Enviar", você será redirecionado para o WhatsApp com a mensagem preenchida automaticamente.</span>
    </form>
  );
};

export default Form;
