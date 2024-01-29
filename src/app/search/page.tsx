"use client"

import React from 'react'
import { useState, useMemo, useEffect } from "react";
import debouce from "lodash.debounce";
import Link from 'next/link';
import Image from 'next/image';

const eventListPlaceholder = [
    "concert",
    "music concert",
    "jazz music concert",
    "e-sport event",
    "game event"
];

const page = () => {

    const [searchTerm, setSearchTerm] = useState("");

    let listToDisplay = eventListPlaceholder;

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const renderEventList = () => {
        return listToDisplay.map((event, i) => <p key={i}>{event}</p>);
    };

    if (searchTerm !== "") {
        listToDisplay = eventListPlaceholder.filter((event) => {
            return event.includes(searchTerm);
        });
    }

    const debouncedResults = useMemo(() => {
        return debouce(handleChange, 300);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    return (
        <div>
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
                <Image src="/eventbrite-logo.png" width={200} height={200} alt="Flowbite Logo" />
            </Link>
            <div className='m-10'>
                <h2 className='text-center text-2xl font-extrabold'>Search Event</h2>
                <div className='h-screen m-12'>
                    <form>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Events" onChange={debouncedResults} required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                    <div className='m-10 font-light'>
                        {renderEventList()}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page