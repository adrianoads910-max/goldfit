import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <header className="flex">
            <picture className="max-w-[64px]">
                <img src="./logo.jpeg" alt="logo goldfit" />
            </picture>
            <nav className="z-50  flex justify-center items-center w-full gap-4 p-4 bg-brand-purple text-2xl">
                <Link className=" text-brand-yellow font-bold hover:underline cursor-pointer" to="/">Home</Link>
                <Link className=" text-brand-yellow font-bold hover:underline cursor-pointer" to="/institucional">Institucional</Link>
                <Link className=" text-brand-yellow font-bold hover:underline cursor-pointer" to="/planos">Planos</Link>
                <Link className=" text-brand-yellow font-bold hover:underline cursor-pointer" to="/unidades">Unidades</Link>
            </nav>

        </header>
    )
}