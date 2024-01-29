import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'

const SearchBar = () => {
    return (
        <div className='relative w-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3' fill='none' viewBox="0 0 50 50" stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <Link href='/search'><Input type='text' placeholder='Search events' className='pl-12 pr-4 w-full border rounded-full border-gray-200' /></Link>
        </div>
    )
}

export default SearchBar