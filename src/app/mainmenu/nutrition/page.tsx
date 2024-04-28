import { Header } from "@/components/internal-sections/Header";
import { NutritionMenu } from "@/components/internal-sections/NutritionMenu";
import { Sidebar } from "@/components/internal-sections/Sidebar";

export default function NutritionPage() {
    return (
        <main className="grid grid-cols-5 w-full">
            <Sidebar />
            <section className="grid grid-cols-4 col-span-4 p-6 gap-y-4">
                <Header title="Nutrition" />
                <NutritionMenu />
                <section className="grid  col-span-4 gap-2 max-w-full  2xl:max-w-full 2xl:grid-cols-4 h-max">
                    <h2 className="text-xl font-semibold before:absolute before:content-[''] before:h-6 before:w-1 before:-ml-3 before:bg-purple-500">Overview</h2>
                    <section className="flex justify-between">
                        <span>Nutricionist: Marie Doe</span>
                        <span>Begin date: December 15th, 2023</span>
                    </section>
                </section>
            </section>
        </main>
    )
}