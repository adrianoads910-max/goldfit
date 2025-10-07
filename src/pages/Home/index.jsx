import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const SPACE = [
    {
        img: {
            src: "./musculacao.jpg",
            alt: "musculaçao"
        },
        trainer: "Musculação"


    },
    {
        img: {
            src: "./natacao.jpg",
            alt: "natação"
        },
        trainer: "Natação"
    },
    {
        img: {
            src: "./fitdance.jpg",
            alt: "fitdance"
        },
        trainer: "FitDance"
    },
    {
        img: {
            src: "./crossfit.jpg",
            alt: "crossfit"
        },
        trainer: "CrossFit"
    }
]

export const Home = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-950">

            <Navbar />
            <header className=" z-10 relative bg-center bg-cover bg-[url(/inicial.png)] h-[80vh] sm:h-screen">

                <section className="absolute bottom-10 right-6 sm:right-20 flex justify-end">
                    <Button variant="primary">Faça uma aula experimental!</Button>
                </section>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                <div className="lg:col-span-2 flex justify-center items-center">
                    <picture>
                        <img src="./transforme.png" alt="plano" className="p-4 object-contain w-full max-w-4xl " />
                    </picture>
                </div>

                <div className=" flex flex-col items-center gap-8">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-3xl p-2 object-cover w-100 h-72 " />
                    </picture>

                    <section className="mt-4">
                        <Button variant="primary">Conheça nossas unidades</Button>
                    </section>
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-3xl p-2 object-cover w-100 h-72 " />
                    </picture>

                    <section className="mt-4 ">
                        <Button variant="primary">Conheça nossos planos</Button>
                    </section>
                </div>

            </div>
            <div>
                <article>
                    <h3 className="text-5xl sm:text-4xl md:text-5xl text-center font-semibold text-brand-yellow mb-8">Conheça agora nossos espaços, treinos e aulas coletivas:</h3>
                </article>
                <picture className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SPACE.map((item) => (
                        <section key={item.img.src} className="text-neutral-50 p-3">
                            <div className="relative overflow-hidden group rounded-2xl">
                                <img
                                    src={item.img.src}
                                    alt={item.img.alt}
                                    className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-brand-purple-alt py-2 text-center transition-colors duration-300 group-hover:bg-brand-purple">
                                    <p className="text-brand-yellow text-lg font-extrabold tracking-wide uppercase">
                                        {item.trainer}
                                    </p>
                                </div>
                            </div>


                            <article className="mt-4 text-center">
                                <Button>Matricule-se já</Button>
                            </article>
                        </section>
                    ))}
                </picture>


            </div>
            <footer>
                <Footer />
            </footer>
        </main>

    )
}
