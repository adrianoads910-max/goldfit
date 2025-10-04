import { Link } from "react-router-dom"

export const Footer = () => {
     return (
        <footer className="flex flex-nowrap bg-brand-purple gap-2 p-4 items-center-safe justify-center-safe">
            <picture className="max-w-[180px]">
                <img src="./logo.jpeg" alt="logo goldfit" />
                <p className="text-brand-yellow font-bold p-2">🔍Indique um ponto</p>
            </picture>
            <div className="text-brand-yellow font-bold text-center p-4">  
                 <p className="p-4">&copy; 2025 Academia Goldfit. Todos os direitos reservados.</p>
            </div>
            <div className="text-brand-yellow font-bold text-center p-4">
                    <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Instagram</a>
                   <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Facebook</a>
                   <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Twiter</a>
            </div>
        </footer>
    )
}
    
