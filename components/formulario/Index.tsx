import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
  propostaFile: File | null;
  propostaName: string;
}

export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    propostaFile: null,
    propostaName: ""
  });

  const propostaFileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileUpload = () => {
    const file = propostaFileRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Arquivo:", reader.result);
        setFormData((prevData) => ({
          ...prevData,
          propostaFile: file,
          propostaName: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="mensagem">Mensagem:</label>
      <input
        id="mensagem"
        type="text"
        name="mensagem"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="proposta">Proposta:</label>
      <input
        id="proposta"
        type="file"
        name="proposta"
        ref={propostaFileRef}
        onChange={handleFileUpload}
      />

      <Button
        type="submit"
        variant="contained"
        className="bg-[#e70000] hover:bg-[#f6a824] shadow-[0px_0px_20px_#e7004c] hover:shadow-[0px_0px_20px_#f6a824] transition-all duration-200 mt-7"
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </form>
  );
};
