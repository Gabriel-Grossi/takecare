import { BrainCircuit, Dumbbell, Smile, Utensils } from "lucide-react";

export function ServicesSection() {
    return (
        <section className="grid gap-8 py-16">
            <section className="grid justify-items-center gap-y-8 text-center">
                <h3 className="text-2xl font-semibold">Our Services</h3>
                <span className="max-w-[70vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dignissimos molestiae illum sit adipisci atque nostrum temporibus perspiciatis, ipsa accusamus!</span>
            </section>
            <section className="grid grid-cols-2 gap-2 max-w-4xl 2xl:max-w-7xl 2xl:grid-cols-4">
                <div className="bg-purple-700 p-4 rounded-md shadow-md">
                    <div className='flex items-center gap-x-2'>
                        <Utensils size={48} className='text-purple-400 p-1' />
                        <h3 className="text-2xl font-semibold text-purple-50">Nutrition</h3>
                    </div>
                    <p className="text-justify pt-4 text-purple-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla commodi eum dolore ipsa perspiciatis.</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-md shadow-md">
                    <div className='flex items-center gap-x-2'>
                        <Dumbbell size={48} className='text-purple-400 p-1' />
                        <h3 className="text-2xl font-semibold text-purple-50">Fitness</h3>
                    </div>
                    <p className="text-justify pt-4 text-purple-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla commodi eum dolore ipsa perspiciatis.</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-md shadow-md">
                    <div className='flex items-center gap-x-2'>
                        <Smile size={48} className='text-purple-400 p-1' />
                        <h3 className="text-2xl font-semibold text-purple-50">Physicology Health</h3>
                    </div>
                    <p className="text-justify pt-4 text-purple-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla commodi eum dolore ipsa perspiciatis.</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-md shadow-md">
                    <div className='flex items-center gap-x-2'>
                        <BrainCircuit size={48} className='text-purple-400 p-1' />
                        <h3 className="text-2xl font-semibold text-purple-50">Mental Health</h3>
                    </div>
                    <p className="text-justify pt-4 text-purple-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla commodi eum dolore ipsa perspiciatis.</p>
                </div>
            </section>
        </section >
    )
}