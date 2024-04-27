export function NavigationBar() {
    return (
        <header className="pt-8">
            <nav className="flex gap-y-4 justify-between">
                <ul className="flex justify-center">
                    <li>
                        <h1 className="font-semibold text-black text-3xl text-center">take<span className="text-purple-600">care</span></h1>
                    </li>
                </ul>
                <ul className="flex gap-x-4 justify-center">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li >
                        <a
                            className="h-max overflow-hidden p-2 rounded-md shadow-md bg-purple-600 text-white font-medium"
                            href="/login">
                            Sign in/Sign up
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}