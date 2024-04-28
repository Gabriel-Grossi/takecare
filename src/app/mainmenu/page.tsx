import { Sidebar } from "@/components/internal-sections/Sidebar";
import Link from "next/link";
import { Header } from "@/components/internal-sections/Header";

interface MainMenuProps {
    id: number,
    title: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    urlAddress: string
}

const mainMenuTopics = [
    {
        "id": 1,
        "title": "Nutrition",
        "description": "Schedule an appointment with one of our experts.",
        "imageSrc": "../../../../healthmeal.jpg",
        "imageAlt": "Photo of a colorful health meal",
        "urlAddress": "/mainmenu/nutrition"
    },
    {
        "id": 2,
        "title": "Fitness",
        "description": "Get in contact with our personal trainer and teachers.",
        "imageSrc": "../../../../gymwomen.svg",
        "imageAlt": "Photo of a woman at the gym",
        "urlAddress": "/mainmenu/fitness"
    }
]

export default function MainMenu() {
    return (
        <>
            <main className="grid grid-cols-5 w-full">
                <Sidebar />
                <section className="grid grid-cols-4 col-span-4 p-6 gap-y-4">
                    <Header title="Good" />
                    <div className="grid grid-cols-3 col-span-4 gap-2 max-w-full  2xl:max-w-7xl 2xl:grid-cols-4 h-max">
                        {
                            mainMenuTopics.map((info: MainMenuProps) => {
                                return (
                                    <Link href={info.urlAddress} className="bg-purple-700 rounded-md shadow-md h-96 overflow-hidden grid">
                                        <section className="h-60 opacity-40">
                                            <img src={info.imageSrc} alt={info.imageAlt} className="object-cover" />
                                        </section>
                                        <section className="p-4 z-10 bg-purple-600">
                                            <h3 className="text-2xl font-semibold text-purple-50 z-10">{info.title}</h3>
                                            <p className="text-justify pt-4 text-purple-200 z-10">{info.description}</p>
                                        </section>
                                    </Link>
                                )
                            })}
                    </div>
                </section>
            </main >
        </>
    )
}