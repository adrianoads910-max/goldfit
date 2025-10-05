import { Link } from "react-router-dom"
import { useState } from "react"
import { TextField } from "../../components/TextField"
import { Button } from "../../components/Button"

export const Footer = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const dados = { name, email, mensagem }
        console.log(dados)
    }
     return (
        <main className="bg-brand-purple">
            <footer className="grid grid-flow-col grid-rows-3 gap-4 bg-brand-purple max-h-[550px]">
                <div className="text-brand-yellow font-bold text-center p-2 row-span-3 justify-start">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 text-brand-yellow text-2xl">
                                        <h2 className="text-3xl text-center font-semibold text-brand-yellow p-6">Deixe um comentário!</h2>
                                        <TextField label="Nome completo" type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} />
                    
                                        <TextField label="E-mail" type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                    
                    
                                        <fieldset className="flex flex-col gap-2 mb-2">
                                            <label htmlFor="message">Mensagem</label>
                    
                                            <textarea
                                                className="border rounded-lg p-2 max-h-96 resize-none"
                                                id="message"
                                                value={mensagem}
                                                onChange={event => setMensagem(event.target.value)}
                                            />
                                        </fieldset>
                    
                                        <Button variant="primary">Enviar</Button>
                                    </form>
                </div>
                <picture className="max-w-[180px] col-span-2 justify-self-center">
                    <img src="./logo.jpeg" alt="logo goldfit"/>
                    <p className="text-brand-yellow font-bold p-2 text-center">🔍Indique um ponto</p>
                </picture>
                <div className="text-brand-yellow font-bold text-center p-2 col-span-2 row-span-2 py-10">
                    <div>
                        <p className="text-2xl text-center font-semibold p-6">📩Email: goldfit@gmail.com</p>
                        <p className="text-2xl text-center font-semibold p-6">🟢Whatsapp: (98) 98832-5686</p>
                    </div>
                    <div>
                        <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Instagram</a>
                        <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Facebook</a>
                        <a className="text-4xl p-4 hover:underline cursor-pointer"href="site1.html">Twiter</a>
                    </div>
                </div>

            </footer>
                <div className="text-brand-yellow font-bold text-center p-4 ">  
                    <p className="p-4">&copy; 2025 Academia Goldfit. Todos os direitos reservados.</p>
                </div>
        </main>    
    )
}
    
