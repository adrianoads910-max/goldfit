import { Navbar } from "../../components/Navbar"

export const Home = () => {
    return (
        <main className="w-full m-auto min-h-screen bg-black">
            <header className="bg-center bg-cover bg-[url(./background-image.jpg)] h-screen">

                <Navbar />
                <article className="">
                    <h1 className="font-mono font-bold text-8xl text-left md:text-2xl text-amber-100/100">Transforme seu corpo, transforme sua vida 💪</h1>
                    <h2 className="font-mono font-bold text-7xl text-left md:text-2xl text-amber-100/80">Supere seus limites, conquiste seus resultados 🏋️</h2>
                    <h3 className="font-mono font-bold text-6xl text-left md:text-2xl text-amber-100/60">Mais força, mais foco, mais você 🔥</h3>

                </article>
            </header>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3">
                    <article>
                        <p></p>
                    </article>
                </div>
                <div className=" row-span-1 w-2xs ">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" />
                    </picture>
                    <article>
                        <p>Conheça nossas unidades</p>
                    </article>
                </div>
                <div className="row-span-2 w-2xs">
                    <picture >
                        <img src="./unidade1.jpeg" alt="unidade Maiobão" />
                    </picture>
                    <article>
                        <p>Conheça nossos Planos</p>
                    </article>
                </div>

            </div>
        </main>

    )
}
