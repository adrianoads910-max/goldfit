import { Navbar } from "../../components/Navbar"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

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
        <main className="w-full m-auto min-h-screen bg-slate-900">
            <header>
                <Navbar />

                <h2 className="text-5xl text-center font-semibold text-brand-yellow p-6">Nossas Unidades</h2>
            </header>
             <div className="flex flex-row justify-center-safe items-center-safe">
                <div className="basis-1/3">
                    <h2 className="text-amber-50 text-center text-4xl p-4">Escolha a nossa unidade que mais combina <strong>com você.</strong></h2>
                </div>
                <div className=" flex basis-2/3 z-10 h-screen p-4 object-center justify-center-safe">
                    <img src="./inside.jpg" alt="" className="bg-center p-4 brightness-50 max-w-[900px] max-h-[450px] object-center rounded-3xl"/>
                </div>
            </div>


            <form class="max-w-5xl mx-auto p-4">
                <label for="default-search" class="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-brand-teal hover:bg-brand-purple-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-brand-purple-alt dark:hover:bg-brand-teal dark:focus:ring-blue-800">Search</button>
                </div>
            </form>


            <div className="grid grid-cols-4 gap-4 p-2 justify-center content-center items-center">
                {UNITS.map((item) => (
                    <section className={`text-neutral-50 p-3`}>
                        <picture className="">
                            <img src={item.img.src} alt={item.img.alt} className="rounded-2xl border-1" />
                        </picture>
                        <article>
                            <p className="p-2">{item.adress}</p>
                            <Button>Matricule-se já</Button>
                        </article>
                    </section>
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}
