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
        setName("")
        setEmail("")
        setMensagem("")
    }

    return (
        <footer className="bg-brand-purple text-brand-yellow font-bold">
            <div className="max-w-screen-xl mx-auto p-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form onSubmit={handleSubmit} className="w-full text-brand-yellow text-2xl">
                            <h2 className="text-3xl text-center font-semibold mb-6">Deixe um comentário!</h2>

                            <TextField label="Nome completo" type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} className=" bg-gray-200 text-gray-900" />
                            <TextField label="E-mail" type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} className=" bg-gray-200 text-gray-900" />

                            <fieldset className="flex flex-col gap-2 mb-4">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    className="border rounded-lg p-2 h-32 resize-none bg-gray-200 text-gray-900"
                                    id="message"
                                    value={mensagem}
                                    onChange={event => setMensagem(event.target.value)}
                                />
                            </fieldset>

                            <Button variant="primary">Enviar</Button>
                        </form>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
                        <picture className="max-w-[180px]">
                            <img src="./logo.jpeg" alt="logo goldfit" />
                            <p className="p-2">🔍 Indique um ponto</p>
                        </picture>

                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-semibold">📩 Email: goldfit@gmail.com</p>
                            <p className="text-2xl font-semibold">🟢 Whatsapp: (98) 98832-5686</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 ">
                            <a className="text-3xl hover:underline" href="#">Instagram</a>
                            <a className="text-3xl hover:underline" href="#">Facebook</a>
                            <a className="text-3xl hover:underline" href="#">Twitter</a>
                        </div>
                    </div>

                </div>
                <div className="text-center border-t border-gray-700 mt-12 pt-6">
                    <p>&copy; 2025 Academia Goldfit. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    )
}