export function HeroSection() {
    return (
        <section className="h-screen 2xl:h-[80vh] 2xl:py-12 2xl:my-10 w-full flex overflow-hidden justify-between items-center py-16">
            <section className="grid gap-8 max-w-96 text-justify">
                <h2 className="text-4xl font-semibold">Take care of <span className="text-purple-600">yourself</span></h2>
                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore laborum labore fugit vel quibusdam!</p>
                <a
                    href=""
                    className="w-max p-2 rounded-md border bg-purple-600 text-white font-medium"
                >Get more details</a>
            </section>
            <section className="w-max flex object-cover h-full grayscale object-center rounded-xl hover:grayscale-0 transition-all">
                {/*<img className="w-full" src="./../../runningwomen.jpg" alt="" />*/}
                <img className="flex rounded-l-full rounded-r-lg shadow-xl" src="./../../gymwomen.svg" alt="" />
            </section>
        </section>
    )
}