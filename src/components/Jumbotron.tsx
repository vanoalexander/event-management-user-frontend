import Link from 'next/link'
import React from 'react'

const Jumbotron = () => {
    return (


        <section className="bg-cover bg-bottom bg-no-repeat bg-[url('/event-home.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Manage Your Event Online</h1>
                <p className="mb-8 text-base font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Everything you need for attending and creating events, in one place</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link href="#event-list" className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700  hover:bg-orange-500'>
                        Find your next event
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Jumbotron