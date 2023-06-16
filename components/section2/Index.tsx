import { Formulario } from "../formulario/Index";


export default function Section2() {
    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-[#04083a] flex flex-col  items-center max-w-screen text-white">
            <div className="mb-10 px-5 w-full lg:min-h-[450px] flex justify-center items-center video ">
                <iframe className="w-full lg:w-[80%] h-[200px] lg:h-[450px] " src="https://www.youtube.com/embed/ZNHFoOvSlNs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="mb-10 px-5 w-full md:w-[50%] flex flex-col items-center ">
                <h2 className="text-5xl font-bold">Aprenda com quem sabe</h2>
                <p className=" md:text-center mt-10 text-xl ">
                    Aprenda a criar suas primeiras campanhas no google, a maior ferramenta de vendas da internet. Um curso do zero ao avançado para você começar a gerar vendas no google, mesmo que você nunca tenha criado nenhuma campanha.
                </p>
            </div>
            <Formulario />
        </section>
    )
}