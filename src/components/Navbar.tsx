import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/eventbrite-logo.png" width={100} height={100} className=" h-14 w-24" alt="Flowbite Logo" />
                    </a>
                    <SearchBar />
                    <div className="flex md:order-2">
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" onClick={() => setNavbar(!navbar)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div style={{ display: navbar ? "block" : "" }} className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link href="/login" onClick={() => setNavbar(!navbar)} className="block py-2 px-3 text-gray-900 rounded hover:text-orange-500 md:bg-transparent md:p-0 md:hover:text-orange-500">Log In</Link>
                            </li>
                            <li>
                                <Link href="/signup" onClick={() => setNavbar(!navbar)} className="block py-2 px-3 text-gray-900 rounded hover:text-orange-500 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Sign Up</Link>
                            </li>
                            <li>
                                <Link href="/event-list" onClick={() => setNavbar(!navbar)} className="block py-2 px-3 text-gray-900 rounded hover:text-orange-500 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Find Event</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar