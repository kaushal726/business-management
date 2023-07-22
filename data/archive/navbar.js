<nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
            <div className="flex space-x-7">


                <a href="#" className="flex items-center py-4 px-2">
                    <img src="images/devwares-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="font-semibold text-gray-500 text-lg">
                        Navigation
                    </span>
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
                <a href=""
                    className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold">
                    Home
                </a>
                <a href=""
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                    Services
                </a>
                <a href=""
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                    About
                </a>
                <a href=""
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                    Contact Us
                </a>
            </div>

            <div className="md:hidden flex items-center">
                <button className="outline-none menu-button">
                    <svg className="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" viewBox="0 00 24 24" stroke="currentColor"><path d="m4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div className="hidden mobile-menu">
                <ul className="">
                    <li className="active">
                        <a href="nav.html"
                            className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold" />
                        Home
                    </li>
                    <li>
                        <a href="#services"
                            className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#About"
                            className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Contact Us"
                            className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
                            Contact Us
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>