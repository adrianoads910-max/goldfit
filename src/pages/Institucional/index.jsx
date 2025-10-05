import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export const Institucional = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-900">

            <header>
                <Navbar />
                <h1 className="text-5xl text-center font-semibold text-brand-yellow p-6">Sobre a Goldfit</h1>
                
            </header>
          
             <div className="flex flex-row justify-center-safe items-center-safe">
                <div className="basis-2/3 py-20">
                    <h2 className="text-amber-50 text-center text-2xl p-6">A Goldfit Academia veio para transformar e remoldar o seu conceito de ginástica, baseada em 3 pilares: custo competitivo, alta qualidade e atendimento diferenciado.Nossa jornada começou em 2020, com a inauguração da nossa primeira unidade em São Luís. O sucesso foi tanto que logo expandimos para levar nosso diferencial a todo o Maranhão.Agora, nossa meta é levar a rede Goldfit para o Brasil inteiro. <strong>Vem com a gente?</strong></h2>
                </div>
                <div className=" flex basis-1/3 z-10 h-screen p-4 object-center justify-center-safe">
                    <img src="./planos.jpg" alt="" className="bg-center p-4 brightness-50 max-w-[900px] max-h-[450px] object-center rounded-3xl"/>
                </div>
            </div>
            
            <div className="flex flex-row justify-center-safe items-center-safe">
                <div className=" flex basis-1/3 z-10 h-screen p-4 object-center justify-center-safe">
                    <img src="./logo.jpeg" alt="" className="bg-center p-4 max-w-[900px] max-h-[450px] object-center rounded-3xl"/>
                </div>
                <div className="basis-2/3 ">
                    <h3 className="text-5xl text-center font-semibold text-brand-yellow p-4">Quem Somos</h3>
                    <p className="text-amber-50 text-center text-2xl p-4 gap-2">A <strong>Goldfit Academia</strong> nasceu do desejo de inovar. Nossos fundadores uniram suas vastas experiências em empreendedorismo, marketing e consultoria para criar um novo conceito de academia, baseado em um tripé sólido: custo competitivo, alta qualidade e atendimento diferenciado. O resultado é um negócio com características inovadoras e surpreendentemente acessíveis, pensado para quem busca o melhor.</p>
                </div>
            </div>
            <div className=" bg-slate-900 p-1 justify-around">
               <div className="flex flex-row gap-5 p-10 bg-amber-50 justify-around">
                    <div className="basis-1/4 bg-brand-purple-alt p-20 text-center text-4xl text-amber-50 font-bold transition-colors duration-300 hover:bg-amber-400 hover:text-brand-purple-alt">Missão</div>
                    <div className="basis-1/4 bg-brand-purple-alt p-20 text-center text-4xl text-amber-50 font-bold transition-colors duration-300 hover:bg-amber-400 hover:text-brand-purple-alt">Visão</div>
                    <div className="basis-1/4 bg-brand-purple-alt p-20 text-center text-4xl text-amber-50 font-bold transition-colors duration-300 hover:bg-amber-400 hover:text-brand-purple-alt">Valores</div>
                </div> 
            </div>
            <div className="bg-brand-teal p-10 border rounded-tr-full rounded-bl-full">
                <article>
                    <h4 className="font-bold text-center text-brand-purple text-3xl p-2">Você sabia?</h4>
                    <p className="font-bold text-center text-brand-purple text-6xl p-2">O BRASIL É O SEGUNDO MERCADO DO MUNDO EM ACADEMIAS.</p>
                    <p className="font-bold text-center text-brand-purple text-3xl p-2">Isso demonstra um grande público a ser atingido e uma alta lucratividade.</p>
                </article>
            </div>
             <footer className=" bg-slate-900 p-2 justify-around">
                <Footer />
             </footer>
        </main>

    )
}
