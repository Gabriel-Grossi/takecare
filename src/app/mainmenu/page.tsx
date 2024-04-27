import { BrainCircuit, Dumbbell, Home, LogOut, Utensils } from "lucide-react";

export default function MainMenu() {
    const currentHour = new Date().getHours()
    let greeting = ''

    if (currentHour >= 5 && currentHour <= 12) {
        greeting = 'Morning'
    }
    else if (currentHour >= 13 && currentHour <= 23) {
        greeting = 'Afternoon'
    }
    else {
        greeting = 'Night'
    }

    return (
        <>
            <main className="grid grid-cols-5 w-full">
                <header className="grid-cols-1 grid p-4 bg-purple-950 min-h-screen">
                    <nav className="flex flex-col gap-y-8">
                        <ul>
                            <h1 className="font-semibold text-white text-3xl text-center">take<span className="text-purple-600">care</span></h1>
                        </ul>
                        <ul className="text-white grid gap-6">
                            <li className="flex gap-2 items-center">
                                <Home />Home
                            </li>
                            <li className="flex gap-2 items-center">
                                <Utensils />Nutrition
                            </li>
                            <li className="flex gap-2 items-center">
                                <Dumbbell />Fitness
                            </li>
                            <li className="flex gap-2 items-center">
                                <BrainCircuit />Physicological Health
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="grid grid-cols-4 col-span-4 p-6 gap-y-8">
                    <div className="lg:flex lg:items-center lg:justify-between col-span-4 top-0 relative">
                        <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Good {greeting}</h2>
                        </div>
                        <div className="mt-5 flex lg:ml-4 lg:mt-0">
                            <span className="sm:ml-3">
                                <button type="button" className="inline-flex items-center rounded-md bg-purple-900 px-3 py-2 gap-x-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900">
                                    < LogOut />
                                    Sign out
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 col-span-4 gap-2 max-w-full  2xl:max-w-7xl 2xl:grid-cols-4 h-max">
                        <div className="bg-purple-700 rounded-md shadow-md h-96 overflow-hidden grid">
                            <section className="h-60 opacity-40">
                                <img src="../../../../healthmeal.jpg" alt="Foto de Nadine Primeau" className="object-cover" />
                            </section>
                            <section className="p-4 z-10 bg-purple-600">
                                <h3 className="text-2xl font-semibold text-purple-50 z-10">Nutrition</h3>
                                <p className="text-justify pt-4 text-purple-200 z-10">Schedule an appointment with one of our experts.</p>
                            </section>
                        </div>
                        <div className="bg-purple-700 rounded-md shadow-md h-96 overflow-hidden grid">
                            <section className="h-60 opacity-40">
                                <img src="../../../../gymwomen.svg" alt="Foto de Nadine Primeau" className="object-cover" />
                            </section>
                            <section className="p-4 z-10 bg-purple-600">
                                <h3 className="text-2xl font-semibold text-purple-50">Fitness</h3>
                                <p className="text-justify pt-4 text-purple-200 ">Get in contact with our personal trainer and teachers.</p>
                            </section>
                        </div>
                        <div className="bg-purple-700 rounded-md shadow-md h-96 overflow-hidden grid">
                            <section className="h-60 opacity-40">
                                <img src="../../../../peopletalking.jpg" alt="Foto de Toa Heftiba" className="object-cover" />
                            </section>
                            <section className="p-4 z-10 bg-purple-600">
                                <h3 className="text-2xl font-semibold text-purple-50">Physicological Health</h3>
                                <p className="text-justify pt-4 text-purple-200 ">Our mind should be always your top 1 priority, and we are here for you.</p>
                            </section>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}