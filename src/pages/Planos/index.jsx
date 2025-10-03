import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"

const PLANS = [
    {
        title: 'FIT RECORRENTE',
        bgColor: '',
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
                <h1 className="text-5xl text-center font-semibold text-brand-yellow p-6">Conheça nossos Planos</h1>
            </header>

            <div className="container justify-self-center grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
                {PLANS.map((item) => (
                    <section className={`text-neutral-50 border p-4 rounded-tr-2xl rounded-bl-2xl space-y-3 border-neutral-50 ${item.bgColor}`}>
                        <h3 className="text-3xl font-semibold text-center">{item.title}</h3>

                        <ul>
                            {item.items.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <article className="text-center">

                            <p className="line-through">{item.price}</p>
                            <strong className="text-4xl font-semibold">{item.realPrice}</strong>
                        </article>

                        <Button>Assinar {item.title}</Button>
                    </section>
                ))}
            </div>
        </main>

    )
}
