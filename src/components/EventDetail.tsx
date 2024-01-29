import Image from 'next/image'
import React from 'react'

const EventDetail = () => {
    return (
        <div>
            <div className='bg-gradient-to-br from-pink-500 to-orange-400 w-screen border-b-2 rounded-lg'>
                <Image src='/event-image.jpg' width={100} height={100} className='p-11 ml-auto mr-auto w-full md:w-1/2' alt='event-image' />
            </div>
            <div className='m-20 md:m-36 text-center border rounded-lg'>
                <div className='m-5'>
                    <p className='text-sm font-light mb-4'>Rabu, 10 Januari 2024</p>
                    <p className='text-3xl font-extrabold mb-5'>Music Concert</p>
                    <p className='text-xl font-bold mb-2'>Lokasi</p>
                    <p className='text-lg font-medium mb-4'>Kawasan Megamas</p>
                    <p className='text-xl font-bold mb-2'>Tanggal dan Waktu</p>
                    <p className='text-lg font-medium mb-4'>10 Januari 2024, 18.00</p>
                    <p className='text-xl font-bold mb-2'>Event Deskripsi</p>
                    <p className='text-base font-normal mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nulla modi. Illum obcaecati deserunt placeat. Est voluptatibus eum perferendis deleniti dignissimos possimus debitis nisi error suscipit aperiam. Alias, animi delectus!</p>
                </div>
                <div className='p-5 m-auto w-1/2 md:m-0 md:w-full'>
                    <button type="button" className="text-orange-500 border m-2 border-orange-500 hover:bg-orange-500 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                        </svg>
                        <span className="sr-only">Saved to Wishlist</span>
                    </button>
                    <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                        Get Tickets
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventDetail