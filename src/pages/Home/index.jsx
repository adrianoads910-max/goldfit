import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export const Home = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-950">

                <Navbar />
            <header className="z-10 bg-center bg-cover bg-[url(./inicial.png)]  h-screen">

                <section className="flex justify-end items-end w-[60%] h-[90%] p-4">
                    <Button variant="primary">Faça uma aula experimental!</Button>
                </section>
            </header>

            <div className="grid grid-flow-col grid-rows-3 gap-4 max-h-[1250px]">
                <div className="row-span-3 basis-2/3">
                    <picture>
                        <img src="./transforme.png" alt="plano" className="p-4 bg-contain max-w-[1300px] max-h-[850px] " />
                    </picture>
                </div>

                <div className=" row-span-1 w-3.5xl p-1 justify-self-center">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-4xl p-4 bg-contain max-w-[450px] max-h-[400px] "/>
                    </picture>

                    <section className="p-4">
                        <Button variant="primary">Conheça nossas unidades</Button>
                    </section>
                </div>
                <div className="row-span-2 w-3.5xl p-1 justify-self-center">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" className="rounded-4xl p-4 bg-contain max-w-[450px] max-h-[400px] "/>
                    </picture>

                    <section className="p-4">
                        <Button variant="primary">Conheça nossos planos</Button>
                    </section>
                </div>

            </div>
             <footer>
                <Footer />
             </footer>
        </main>

    )
}
