import { useState } from "react"
import { TextField } from "../../components/TextField"
import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"

export const Contato = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const dados = { name, email, mensagem }
        console.log(dados)
    }
    return (
        <main className="w-full m-auto h-screen bg-black">
            <header>
                <Navbar />

            </header>
            <section>
                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 text-amber-50 text-2xl">
                    <TextField label="Nome completo" type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} />

                    <TextField label="E-mail" type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

                    <TextField label="mensagem" type="mensagem" name="mensagem" id="mensagem" value={mensagem} onChange={event => setMensagem(event.target.value)} />

                    <Button variant="primary">Enviar</Button>
                </form>
            </section>

        </main>

    )
}
