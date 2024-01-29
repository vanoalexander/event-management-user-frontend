import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const UserProfile = () => {
    return (
        <div className='h-full p-10'>
            <div className='text-center flex items-center'>
                <Image src='/photo-placeholder.jpg' width={100} height={100} className='border rounded-full' alt='prof-pic' />
                <div className='ml-5'>
                    <h3 className='text-2xl font-extrabold'>Nama User</h3>
                    <p className=' text-sm font-light'>Points : 10.000</p>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
            <h4 className='font-bold text-xl'>Tickets</h4>
            <div className='m-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                        <Link href='/event-details'>
                            <img className="rounded-t-lg" src="/event-image.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Music Concert</h5>
                                <p className="mb-3 text-sm font-bold text-gray-700">18 Jan 2024 06:00 PM</p>
                                <p className="mb-3 text-sm text-gray-700">Kawasan Megamas</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"></hr>
            <h4 className='font-bold text-xl'>Wishlist</h4>
            <div className='m-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="bg-white border border-gray-200 rounded-xl shadow m-5">
                        <Link href='/event-details'>
                            <img className="rounded-t-lg" src="/event-image.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Music Concert</h5>
                                <p className="mb-3 text-sm font-bold text-gray-700">18 Jan 2024 06:00 PM</p>
                                <p className="mb-3 text-sm text-gray-700">Kawasan Megamas</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile