import Link from "next/link"

export default function Navbar(params) {
    return (
        <>
            <nav className="bg-black border-gray-200 px-2 py-2">
                <div className="container flex flex-wrap justify-between items-center mx-auto text-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-reception-4" viewBox="0 0 16 16">
                            <path
                                d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                        </svg>
                    </div>
                    <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden inline-flex 
                items-center p-2 ml-3 text-sm text-gray-500 
                rounded-lg hover:bg-gray-100 
                focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                        <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium p-2">
                            <a href="" className="block p-2 my-1
                    hover:bg-red-400 border-b-2 rounded-2xl transition ease-in-out delay-75">
                                <Link href={"/"}>Home</Link>
                            </a>
                            <a href="" className="block p-2 my-1
                    hover:bg-red-400 border-b-2 rounded-2xl transition ease-in-out delay-75">
                                <Link href={"/"}>Home</Link>
                            </a>
                            <a href="" className="block p-2 my-1
                    hover:bg-red-400 border-b-2 rounded-2xl transition ease-in-out delay-75">
                                <Link href={"/about"}>About</Link>
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}