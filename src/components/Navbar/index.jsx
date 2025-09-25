import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex justify-center items-center w-full gap-4 p-4 text-amber-50 text-2xl">
            <Link to="/">Home</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/unidades">Unidades</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}