import React from 'react'

import { Badge } from './ui/badge'
import Link from 'next/link'

const EventCards = () => {
    return (
        <div id='event-list' className='p-32'>
            <div className='m-12 text-center'>
                <h3 className='font-extrabold text-4xl'>Event List</h3>
            </div>
            <div className='m-12 text-center'>
                <h3 className='text-xl font-medium'>Browsing events in</h3>
                <h3 className='text-xl font-light'>'city name'</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                    <Link href='/event-details'>
                        <img className="rounded-t-lg" src="/event-image.jpg" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Music Concert</h5>
                            <p className="mb-3 text-sm font-bold text-gray-700">18 Jan 2024 06:00 PM</p>
                            <p className="mb-3 text-sm text-gray-700">Kawasan Megamas</p>
                            <Badge>Free</Badge>
                        </div>
                    </Link>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                    <Link href='/event-details'>
                        <img className="rounded-t-lg" src="/event-image.jpg" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Music Concert</h5>
                            <p className="mb-3 text-sm font-bold text-gray-700">18 Jan 2024 06:00 PM</p>
                            <p className="mb-3 text-sm text-gray-700">Kawasan Megamas</p>
                            <Badge>Free</Badge>
                        </div>
                    </Link>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                    <Link href='/event-details'>
                        <img className="rounded-t-lg" src="/event-image.jpg" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Music Concert</h5>
                            <p className="mb-3 text-sm font-bold text-gray-700">18 Jan 2024 06:00 PM</p>
                            <p className="mb-3 text-sm text-gray-700">Kawasan Megamas</p>
                            <Badge>Free</Badge>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='m-12 text-center'>
                <Link href='/event-list'>
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:border-orange-500 hover:text-orange-500">See More</button>
                </Link>
            </div>
        </div>
    )
}

export default EventCards