import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const PLANS = [
    {
        title: 'FIT RECORRENTE',
        bgColor: 'bg-brand-purple-alt',
        items: [
            "✔ Avaliação física trimestral",
            "✔ Treino personalizado",
            "✔ Aulas coletivas inclusas",
            "✔ Acesso livre a todas as modalidades",
            "✔ Estacionamento gratuito",
            "✔ PowerDance, PowerBox, PowerCardio",
            "✔ Acesso a todas as unidades da rede PowerFit"
        ],
        price: "De R$229,90",
        realPrice: "Por R$129,90"
    },
    {
        title: 'FIT ANUAL',
        bgColor: 'bg-brand-teal',
        items: [
            "✔ Avaliação física trimestral",
            "✔ Treino personalizado",
            "✔ Aulas coletivas inclusas",
            "✔ Acesso livre a todas as modalidades",
            "✔ Estacionamento gratuito",
            "✔ PowerDance, PowerBox, PowerCardio",
            "❌ Acesso a todas as unidades da rede PowerFit"
        ],
        price: "De R$199,90",
        realPrice: "Por R$109,90"
    },
    {
        title: 'FIT MENSAL',
        bgColor: 'bg-brand-purple-alt',
        items: [
            "✔ Avaliação física trimestral",
            "✔ Treino personalizado",
            "✔ Aulas coletivas inclusas",
            "✔ Acesso livre a todas as modalidades",
            "✔ Estacionamento gratuito",
            "✔ PowerDance, PowerBox, PowerCardio",
            "✔ Acesso a todas as unidades da rede PowerFit"
        ],
        price: "De R$239,90",
        realPrice: "Por R$149,90"
    }

]

export const Planos = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-900">
            <header>
                <Navbar />
                <h1 className="text-4xl md:text-5xl text-center font-semibold text-brand-yellow p-8">Conheça nossos Planos</h1>
                
            </header>
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-amber-50 text-center lg:text-left text-3xl md:text-4xl">Aki sua jornada de saúde, força e equilíbrio é guiada por quem <strong>quer te ajudar.</strong></h2>
                </div>
                <div className=" lg:w-1/2">
                    <img src="./planos.jpg" alt="" className="w-full h-auto object-cover rounded-3xl brightness-75"/>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {PLANS.map((item) => (
                    <section className={`flex flex-col text-neutral-50 border p-6 rounded-2xl space-y-4 border-neutral-50 ${item.bgColor}`}>
                        <h3 className="text-3xl font-semibold text-center">{item.title}</h3>

                        <ul className="flex-grow space-y-2">
                            {item.items.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <article className="text-center">

                            <p className="line-through">{item.price}</p>
                            <strong className="text-3xl md:text-4xl font-semiboldd">{item.realPrice}</strong>
                        </article>

                        <Button>Assinar {item.title}</Button>
                    </section>
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </main>

    )
}
