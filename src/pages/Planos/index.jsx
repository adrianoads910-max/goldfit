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
        <main className=" w-full m-auto min-h-screen bg-slate-950">
            <header>
                <Navbar />
                <h2 className="text-5xl font-semibold text-amber-50 p-6">Conheça nossos Planos</h2>
            </header>

            <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
                {PLANS.map((item) => (
                    <section className={`text-neutral-50 ${item.bgColor}`}>
                        <h3>{item.title}</h3>

                        <ul>
                            {item.items.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <p className="p-2">{item.price} <strong>{item.realPrice}</strong></p>

                        <Button>Assinar {item.title}</Button>
                    </section>
                ))}
            </div>
        </main>

    )
}
