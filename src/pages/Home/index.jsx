import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const SPACE = [
    {
        img: {
            src: "./planos.jpg",
            alt: "unidade cidade operaria"
        },
        trainer: "Musculação"
        

    },
    {
        img: {
            src: "./planos.jpg",
            alt: "unidade cidade operaria"
        },
        trainer: "Natação"
    },
    {
        img: {
            src: "./planos.jpg",
            alt: "unidade cidade operaria"
        },
        trainer: "FitDance"
    },
    {
        img: {
            src: "./planos.jpg",
            alt: "unidade cidade operaria"
        },
        trainer: "CrossFit"
    }
]

export const Home = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-950">

                <Navbar />
            <header className="z-10 bg-center bg-cover bg-[url(./inicial.png)]  h-screen">

                <section className="flex justify-end items-end w-[60%] h-[95%] p-4">
                    <Button variant="primary">Faça uma aula experimental!</Button>
                </section>
            </header>

            <div className="grid grid-flow-col grid-rows-3 gap-4 max-h-[900px]">
                <div className="row-span-3 basis-2/3">
                    <picture>
                        <img src="./transforme.png" alt="plano" className="p-4 bg-contain max-w-[1300px] max-h-[850px] " />
                    </picture>
                </div>

                <div className=" row-span-1 w-3.5xl p-1 justify-self-center">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-4xl p-4 bg-contain max-w-[300px] max-h-[400px] "/>
                    </picture>

                    <section className="p-4">
                        <Button variant="primary">Conheça nossas unidades</Button>
                    </section>
                </div>
                <div className="row-span-2 w-3.5xl p-1 justify-self-center">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-4xl p-4 bg-contain max-w-[300px] max-h-[400px] "/>
                    </picture>

                    <section className="p-4">
                        <Button variant="primary">Conheça nossos planos</Button>
                    </section>
                </div>

            </div>
            <div>
                <article>
                    <h3 className="text-5xl text-center font-semibold text-brand-yellow p-6">Conheça agora nossos espaços, treinos e aulas coletivas:</h3>
                </article>
                <picture className="grid grid-cols-4 gap-4 p-2 justify-center content-center items-center">
                    {SPACE.map((item) => (
                        <section key={item.img.src} className="text-neutral-50 p-3">
                        <div className="relative overflow-hidden group">
                            <img
                                src={item.img.src}
                                alt={item.img.alt}
                                className="rounded-2xl border-1 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-brand-purple-alt py-2 rounded-b-2xl text-center transition-colors duration-300 group-hover:bg-brand-purple">
                                <p className="text-brand-yellow text-lg font-extrabold tracking-wide uppercase">
                                {item.trainer}
                                </p>
                            </div>
                        </div>


                        <article className="p-4 text-center">
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
