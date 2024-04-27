'use client'
import { LogIn } from "lucide-react";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function authenticateUser(e: FormEvent) {
        e.preventDefault()
        if (email == 'teste@teste.com') {
            toast.dark('Deu certo')
        }
    }
    return (
        <main className="flex max-h-screen flex-col justify-center ">
            <section className="grid grid-cols-3 h-full">
                <div className="grid-cols-1 flex flex-col h-screen justify-center shadow-md">

                    <h1 className="font-semibold text-black text-3xl text-center pb-5">take<span className="text-purple-600">care</span></h1>

                    <form className="grid-cols-1   grid gap-y-4 p-4" onSubmit={authenticateUser}>
                        <section className="grid h-min gap-2">
                            <label className="text-sm" htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1  ring-purple-300   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6 invalid:focus-visible:ring-red-600"
                                //className="border border-purple-300 py-1.5 px-2 w-full text-sm placeholder:text-xs"
                                value={email}
                                name='email'
                                placeholder="Type your e-mail here"
                                pattern="(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </section>
                        <section className="grid h-min gap-2">
                            <label className="text-sm" htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                name='password'
                                //className="border border-purple-300 py-1.5 px-2 w-full text-sm placeholder:text-xs"
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-purple-900 outline-none shadow-sm ring-1  ring-purple-300   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600 sm:text-sm sm:leading-6"
                                placeholder="Type your password here"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </section>
                        <button
                            //className="px-3 py-1.5  border bg-purple-600 text-white font-medium h-min w-max"
                            className="flex w-max justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500  focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        >
                            <LogIn className="scale-75" /> Sign in
                        </button>
                        <section className="grid gap-2">
                            <a className="text-sm text-purple-600" href="#">Forgot your password</a>
                            <a className="text-sm text-purple-600" href="#">Sign up</a>

                        </section>
                    </form>
                </div>
                <img src="./../../../exercise.jpg" className="w-full h-full grid-cols-2 col-span-2" alt="" />
            </section>
            <footer className="absolute bottom-0 left-0 text-center p-2 text-white bg-purple-600 w-full">
                <span>© 2024 - takecare LLC.</span>
            </footer>
            <ToastContainer />
        </main>
    );
}
