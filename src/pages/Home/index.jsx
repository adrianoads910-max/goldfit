import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"

export const Home = () => {
    return (
        <main className=" w-full m-auto min-h-screen bg-slate-950">
            <header className="z-10 bg-center bg-cover bg-[url(./background-image.jpg)]  h-screen">

                <Navbar />
                <article>
                    <h1 className="font-mono font-bold text-2xl text-left md:text-5xl text-amber-100/100">Transforme seu corpo, transforme sua vida 💪<span className="inline-block text-amber-100/80">Supere seus limites, conquiste seus resultados 🏋️</span> <span className="inline-block text-amber-100/60">Mais força, mais foco, mais você 🔥</span></h1>
                </article>
            </header>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3">
                    <article>
                        <p className="text-amber-50 font-bold text-6xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad magnam autem error sint. Nihil fugiat hic numquam vero eum! Harum quam possimus natus. Earum sapiente labore praesentium soluta. Autem!</p>
                    </article>
                </div>

                <div className=" row-span-1 w-3.5xl p-1">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" />
                    </picture>

                    <section>
                        <Button variant="primary">Conheça nossas unidades</Button>
                    </section>
                </div>
                <div className="row-span-2 w-3.5xl p-1 ">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" />
                    </picture>

                    <section>
                        <Button variant="primary">Conheça nossos planos</Button>
                    </section>
                </div>

            </div>
        </main>

    )
}
