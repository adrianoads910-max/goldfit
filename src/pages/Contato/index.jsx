import { useState } from "react"
import { TextField } from "../../components/TextField"
import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

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
        <main className="w-full m-auto bg-slate-900">
            <header>
                <Navbar />

            </header>
            <article>
                <h1 className="text-5xl text-center font-semibold text-brand-yellow p-6">Entre em contato conosco!</h1>
                <div className="flex justify-center-safe p-2">
                    <div>
                        <p className="text-2xl text-center font-semibold text-amber-50 p-6">📩Email:</p>
                        <p className="text-4xl text-center font-semibold text-amber-50 p-6"> goldfit@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-2xl text-center font-semibold text-amber-50 p-6">🟢Whatsapp:</p>
                        <p className="text-4xl text-center font-semibold text-amber-50 p-6"> (98) 9 8932-5686</p>
                    </div>
                </div>
            </article>
            <section>
                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 text-amber-50 text-2xl">
                    <h2 className="text-3xl text-center font-semibold text-amber-50 p-6">Deixe um comentário!</h2>
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
            </section>
            <footer>
                <Footer />
            </footer>
        </main>

    )
}
