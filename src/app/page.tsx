import { BrainCircuit, Dumbbell, Smile, Utensils } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-12">
      <header className="pt-4">
        <nav className="grid gap-y-4">
          <ul className="w-full flex justify-center">
            <li>
              <h1 className="font-semibold text-black text-3xl text-center">take<span className="text-purple-600">care</span></h1>
            </li>
          </ul>
          <ul className="flex gap-x-4 justify-center">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <section className="h-screen 2xl:h-[80vh] 2xl:py-12 2xl:my-10 w-full flex overflow-hidden justify-between items-center py-16">
        <section className="grid gap-8 max-w-96 text-justify">
          <h2 className="text-4xl font-semibold">Take care of <span className="text-purple-600">yourself</span></h2>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore laborum labore fugit vel quibusdam!</p>
          <a
            href=""
            className="w-max p-2  border bg-purple-600 text-white font-medium"
          >Get more details</a>
        </section>
        <section className="w-max flex object-cover h-full grayscale object-center rounded-xl hover:grayscale-0 transition-all">
          {/*<img className="w-full" src="./../../runningwomen.jpg" alt="" />*/}
          <img className="flex rounded-l-full rounded-r-lg shadow-xl" src="./../../gymwomen.svg" alt="" />
        </section>
      </section>
      <section className="grid gap-8 py-8">
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
    </main>
  );
}
