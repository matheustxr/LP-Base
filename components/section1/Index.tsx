import Image from 'next/image'
import tessmann from '@/public/tiago-tessmann.png'
import Botao from '../button/Index'

export default function Section1() {
    return(
        <section className="w-full min-h-screen pt-[60px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 via-sky-400 via-35% md:via-10% to-[#04083a] md:to-70%">
            <div className='flex flex-col lg:flex-row-reverse md:justify-center md:items-center'>
                <Image src={tessmann} alt='imagem tiago tessmann' className='w-full  md:max-w-lg lg:max-w-3xl '/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center'>
                    <div className='w-full flex flex-col'>
                        <h1 className='mb-5 text-[80px] md:text-[120px] leading-[100px] font-bold text-white text-center md:text-start'>
                            Revenda Zoomies
                        </h1>
                        <span className='w-full text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>Seja um parceiro Zoomies!</span>
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[30px]'>Obtenha um lucro bruto de até 70% revendendo produtos Zoomies!</h2>
                    <Botao>
                        Chamar no WhatsApp
                    </Botao>
                </div>
            </div>
        </section>
    )
}