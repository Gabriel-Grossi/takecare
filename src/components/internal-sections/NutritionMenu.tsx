import Link from "next/link"

interface NutritionProps {
    id: number,
    title: string,
    description: string,
    urlAddress: string
}

const nutritionTopics = [
    {
        "id": 1,
        "title": "Meal plan",
        'description': 'Check it out the meal plan created for you',
        "urlAddress": '/mainmenu/nutrition/mealplan',
    },
    {
        "id": 2,
        "title": "My progress",
        'description': 'Check it out your progress',
        "urlAddress": '/mainmenu/nutrition/progress',
    },
    {
        "id": 3,
        "title": "My appointments",
        'description': 'Check it out the appointments scheduled',
        "urlAddress": '/mainmenu/nutrition/appointments',
    }
]

export function NutritionMenu() {
    return (
        <div className="grid grid-cols-3 col-span-4 gap-2 max-w-full  2xl:max-w-full 2xl:grid-cols-4 h-max">
            {
                nutritionTopics.map((info: NutritionProps) => {
                    return (
                        <Link
                            href={info.urlAddress}
                            key={info.id}
                            className="bg-purple-700 rounded-md shadow-md h-max overflow-hidden grid hover:brightness-90 transition-colors"
                        >
                            <section className="p-4 bg-purple-600">
                                <h3 className="text-xl font-semibold text-purple-50">{info.title}</h3>
                                <small className="text-justify pt-4 text-purple-200">{info.description}</small>
                            </section>
                        </Link>
                    )
                })
            }
        </div>
    )
}