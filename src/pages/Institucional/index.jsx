import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export const Institucional = () => {
    return (
        <main className="w-full bg-slate-900 text-amber-50">

            <header>
                <Navbar />
                <h1 className="text-4xl md:text-5xl text-center font-semibold text-brand-yellow p-8">
                    Sobre a Goldfit
                </h1>
            </header>
            
            <section className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <div className="lg:w-1/2">
                    <p className="text-xl md:text-2xl text-center lg:text-left">
                        A Goldfit Academia veio para transformar e remoldar o seu conceito de ginástica, baseada em 3 pilares: custo competitivo, alta qualidade e atendimento diferenciado. Nossa jornada começou em 2020, com a inauguração da nossa primeira unidade em São Luís. O sucesso foi tanto que logo expandimos para levar nosso diferencial a todo o Maranhão. Agora, nossa meta é levar a rede Goldfit para o Brasil inteiro. <strong>Vem com a gente?</strong>
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src="./planos.jpg" alt="Pessoas treinando na academia" className="w-full h-auto object-cover rounded-3xl brightness-75"/>
                </div>
            </section>
            
            <section className="flex flex-col-reverse lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <div className="lg:w-1/2">
                    <img src="./logo.jpeg" alt="Logo da Goldfit" className="w-full h-auto object-cover rounded-3xl"/>
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-3xl md:text-5xl text-center lg:text-left font-semibold text-brand-yellow mb-6">Quem Somos</h3>
                    <p className="text-xl md:text-2xl text-center lg:text-left">
                        A <strong>Goldfit Academia</strong> nasceu do desejo de inovar. Nossos fundadores uniram suas vastas experiências em empreendedorismo, marketing e consultoria para criar um novo conceito de academia, baseado em um tripé sólido: custo competitivo, alta qualidade e atendimento diferenciado. O resultado é um negócio com características inovadoras e surpreendentemente acessíveis, pensado para quem busca o melhor.
                    </p>
                </div>
            </section>
            
       <section className="max-w-screen-xl mx-auto p-8">
            <div className="flex flex-col lg:flex-row gap-8 text-center">
                <div className="flex-1 bg-brand-purple-alt p-12 text-3xl md:text-4xl rounded-lg text-amber-50 font-bold transition-all duration-300 hover:scale-105 hover:bg-brand-yellow hover:text-brand-purple-alt">
                    Missão
                </div>
                <div className="flex-1 bg-brand-purple-alt p-12 text-3xl md:text-4xl rounded-lg text-amber-50 font-bold transition-all duration-300 hover:scale-105 hover:bg-brand-yellow hover:text-brand-purple-alt">
                    Visão
                </div>
                <div className="flex-1 bg-brand-purple-alt p-12 text-3xl md:text-4xl rounded-lg text-amber-50 font-bold transition-all duration-300 hover:scale-105 hover:bg-brand-yellow hover:text-brand-purple-alt">
                    Valores
                </div>
            </div> 
        </section>
            
           <section className="bg-brand-teal p-12 my-8 rounded-tr-4xl rounded-bl-4xl lg:rounded-tr-full lg:rounded-bl-full">
                <article className="max-w-screen-xl mx-auto text-center text-brand-purple">
                    <h4 className="font-bold text-2xl md:text-3xl mb-4">Você sabia?</h4>
                    <p className="font-bold text-4xl md:text-6xl mb-4">O BRASIL É O SEGUNDO MERCADO DO MUNDO EM ACADEMIAS.</p>
                    <p className="font-bold text-2xl md:text-3xl">Isso demonstra um grande público a ser atingido e uma alta lucratividade.</p>
                </article>
            </section>
          
            <Footer />
        </main>
    )
}