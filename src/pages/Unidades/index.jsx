
import { useState } from "react";
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
        adress: '📍 Av. Hilton Rocha, 7 - Maiobão, Paço do Lumiar - MA, 65130-000'
    }
]

export const UnityPages = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUnits, setFilteredUnits] = useState(UNITS);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        if (query === '') {
            setFilteredUnits(UNITS); 
        } else {
            
            const newFilteredUnits = UNITS.filter(unit => 
          
                unit.adress.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUnits(newFilteredUnits);
        }
    };

    return (
        <main className="w-full m-auto min-h-screen bg-slate-900">
            <header>
                <Navbar />
                <h2 className="text-4xl md:text-5xl text-center font-semibold text-brand-yellow p-8">Nossas Unidades</h2>
            </header>
            
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-amber-50 text-center lg:text-left text-3xl md:text-4xl">Escolha a nossa unidade que mais combina <strong>com você.</strong></h2>
                </div>
                <div className=" lg:w-1/2">
                    <img src="./inside.jpg" alt="" className="w-full h-auto object-cover rounded-3xl brightness-75"/>
                </div>
            </div>

           
            <form className="max-w-3xl mx-auto p-8" onSubmit={(e) => e.preventDefault()}> 
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Pesquisar</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Pesquise por bairro, cidade ou rua..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                    />
                    
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-brand-yellow hover:bg-brand-purple-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-brand-purple-alt dark:hover:bg-brand-yellow dark:focus:ring-blue-800">Pesquisar</button>
                </div>
            </form>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto p-8">
                {filteredUnits.length > 0 ? (
                    filteredUnits.map((item) => (
                        <section key={item.adress} className="text-neutral-50 flex flex-col items-center text-center p-4">
                            <picture>
                                <img src={item.img.src} alt={item.img.alt} className="rounded-2xl border-2 border-slate-700" />
                            </picture>
                            <article className="p-4 flex flex-col items-center gap-4">
                                <p>{item.adress}</p>
                                <Button>Matricule-se já</Button>
                            </article>
                        </section>
                    ))
                ) : (
                   
                    <p className="text-amber-50 text-center col-span-full">Nenhuma unidade encontrada.</p>
                )}
            </div>
            
            <footer>
                <Footer />
            </footer>
        </main>
    )
}