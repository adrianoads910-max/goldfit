import { Navbar } from "../../components/Navbar"
import { Button } from "../../components/Button"

const UNITS = [
    {
        img: {
            src: "./unidade1.jpeg",
            alt: "unidade cidade operaria"
        },
        adress: '📍 Unidade 203 - Av. 203, - Cidade Operária, São Luís - MA, 65058-172'

    },
    {
        img: {
            src: "./unidade1.jpeg",
            alt: "unidade cidade operaria"
        },
        adress: '📍Av. Hilton Rocha, 7 - Maiobão, Paço do Lumiar - MA, 65130-000'
    }
]

export const UnityPages = () => {
    return (
        <main className="w-full m-auto h-screen bg-black">
            <header>
                <Navbar />

                <h2 className="text-5xl font-semibold text-amber-50 p-6">Nossas Unidades</h2>
            </header>

            <div className="grid grid-cols-4 gap-4 p-2 justify-center content-center items-center">
                {UNITS.map((item) => (
                    <section className={`text-neutral-50 p-3`}>
                        <picture>
                            <img src={item.img.src} alt={item.img.alt} />
                        </picture>
                        <article>
                            <p className="p-2">{item.adress}</p>
                            <Button>Matricule-se já</Button>
                        </article>
                    </section>
                ))}
            </div>
        </main>
    )
}
