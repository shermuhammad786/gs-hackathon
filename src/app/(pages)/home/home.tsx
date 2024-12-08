import Navbar from '@/app/component/navbar'
import React from 'react'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                        <a href="">Plant pots</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Ceramics</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Tables</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Chairs</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Crockery</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Tableware</a>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <a href="">Cutlery </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
