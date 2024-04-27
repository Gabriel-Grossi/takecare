import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function ContactUsSection() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')

    async function authenticateUser(e: FormEvent) {
        e.preventDefault()
        if (email.length > 0 && name.length > 0 && phone.length > 0 && description.length > 0) {
            toast.success('Enviado com sucesso')
            setName('')
            setEmail('')
            setPhone('')
            setDescription('')
        }
        else {
            toast.error('Erro ao enviar dados')
        }
    }

    return (
        <section className="grid gap-8 py-16 justify-items-center">
            <section className="grid justify-items-center gap-y-8 text-center">
                <h3 className="text-2xl font-semibold">Contact us</h3>
                <span className="max-w-[70vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dignissimos molestiae illum sit adipisci atque nostrum temporibus perspiciatis, ipsa accusamus!</span>
            </section>
            <form onSubmit={authenticateUser} className='grid gap-y-8 max-w-1/2'>
                <section className='grid gap-y-1'>
                    <label htmlFor="name" className="text-sm">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-96 rounded-sm border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1  ring-purple-300   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6 invalid:focus-visible:ring-red-600"
                        placeholder="Type your name here..."
                        required
                    />
                </section>
                <section className='grid gap-y-1'>
                    <label htmlFor="email" className="text-sm">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-96 rounded-sm border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1  ring-purple-300   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6 invalid:focus-visible:ring-red-600"
                        placeholder="Type your e-mail here..."
                        id="email"
                        required
                    />
                </section>
                <section className='grid gap-y-1'>
                    <label htmlFor="phone" className="text-sm">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-96 rounded-sm border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1  ring-purple-300   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6 invalid:focus-visible:ring-red-600"
                        placeholder="+1 111-222-3333"
                        id="phone"
                        required
                    />
                </section>
                <section className='grid gap-y-1'>
                    <label htmlFor="">Description</label>
                    <textarea
                        //className='border border-purple-300 px-1.5 py-0.5 w-96'
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-96 rounded-sm border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1 ring-purple-300  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6 invalid:focus-visible:ring-red-600"
                        id="description"
                        placeholder="Type a description here..."
                        required
                    ></textarea>
                </section>
                <button
                    className="w-max px-3 py-1.5 flex gap-x-2 rounded-md bg-purple-600 text-white font-medium"
                ><Send className="scale-75" /> Send form</button>
            </form>
            <ToastContainer />
        </section>

    )
}