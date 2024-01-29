import React from 'react'

import Link from 'next/link'
import { Badge } from './ui/badge'

const EventList = () => {
    return (
        <div className='m-32'>
            <div className='m-12 text-center'>
                <h3 className='font-extrabold text-4xl'>Event List</h3>
            </div>
            <div className='m-12 text-center'>
                <h3 className='text-xl font-medium'>Browsing events in</h3>
                <h3 className='text-xl font-light'>'city name'</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                    <Link href=''>
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
                    <Link href=''>
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
                    <Link href=''>
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
        </div>
    )
}

export default EventList