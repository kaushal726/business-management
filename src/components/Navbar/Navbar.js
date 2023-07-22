import React from 'react'
// import {
//     BrowserRouter as Router, Routes, Route, Link
// }
//     from 'react-router-dom';

function Navbar() {
    return (
        <nav className=''>
            <div className='flex items-center justify-center'>
                <div>
                    <a href="#/"
                        className="py-4 px-2 text-gray-500 border-b-4 hover:border-purple-500 font-semibold">
                        Home
                    </a>
                    <a href="#/"
                        className="py-4 px-2 text-gray-500 border-b-4 hover:border-purple-500 font-semibold">
                        Connect
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar