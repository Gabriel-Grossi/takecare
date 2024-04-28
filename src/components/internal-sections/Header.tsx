interface HeaderProps {
    title: string
}

export function Header({ title }: HeaderProps) {
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
        <div className="lg:flex lg:items-center lg:justify-between col-span-4 top-0 relative">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{title.startsWith('Good') ? `Good ${greeting}` : title}</h2>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
                {/*<span className="sm:ml-3">
                    <button type="button" className="inline-flex items-center rounded-md bg-purple-900 px-3 py-2 gap-x-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900">
                        <LogOut />
                        Sign out
                    </button>
    </span>*/}
            </div>
        </div>
    )
}