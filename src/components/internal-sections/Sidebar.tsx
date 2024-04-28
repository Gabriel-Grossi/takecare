import { Home, Utensils, Dumbbell } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    return (
        <header className="grid-cols-1 grid p-4 bg-purple-950 min-h-screen">
            <nav className="flex flex-col gap-y-8">
                <ul>
                    <h1 className="font-semibold text-white text-3xl text-center">take<span className="text-purple-600">care</span></h1>
                </ul>
                <ul className="text-white grid gap-6">
                    <li>
                        <Link
                            href='/mainmenu'
                            className="flex gap-2 items-center"
                        >
                            <Home />Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/mainmenu/nutrition'
                            className="flex gap-2 items-center"
                        >
                            <Utensils />Nutrition
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/mainmenu/fitness'
                            className="flex gap-2 items-center"
                        >
                            <Dumbbell />Fitness
                        </Link>
                    </li>
                    {/*
                            <li className="flex gap-2 items-center">
                                <BrainCircuit />Physicological Health
                            </li>
                            */}
                </ul>
            </nav>
        </header>
    )
}