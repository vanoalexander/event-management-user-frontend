import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"



import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'




const Navbar = () => {
    return (
        <div>
            <nav className='navbar fixed w-full z-20 top-0 start-0 bg-white'>
                <div className='max-w-screen flex flex-wrap items-center justify-between'>
                    <Link href='/' className='flex items-center'>
                        <Image src="/eventbrite-logo.png" width={150} height={100} alt='logo-pic' />
                    </Link>
                    <div className='relative w-1/3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3' fill='none' viewBox="0 0 50 50" stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                        <Input type='text' placeholder='Search events' className='pl-12 pr-4 w-full border rounded-full border-gray-200' /></div>
                    <div className='flex md:order-2 space-x-3 md:space-x-0 px-2'>
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700" onClick={() => setNavbar(!navbar)}>
                            <svg className="w-5 h-5" xmlnsXlink="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div style={{ display: navbar ? "block" : "" }} className='items-center justify-between w-full hidden md:pl-48 md:flex md:w-auto md:order-1'>
                        <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0'>
                            <li>
                                <Link href='/' onClick={() => setNavbar(!navbar)} className='block border-0 rounded-full py-2 px-3  hover:bg-slate-300 sm:p-0'><Button variant='ghost'>Login</Button></Link>
                            </li>
                            <li>
                                <Link href='/about' onClick={() => setNavbar(!navbar)} className='block border-0 rounded-full py-2 px-3  hover:bg-slate-300 sm:p-0'><Button variant='ghost'>Sign Up</Button></Link>
                            </li>
                            <li>
                                <Link href='/about' onClick={() => setNavbar(!navbar)} className='block border-0 rounded-full py-2 px-3  hover:bg-slate-300 sm:p-0'><Button variant='ghost'>Find Event</Button></Link>
                            </li>
                            <li>
                                <Link href='/about' onClick={() => setNavbar(!navbar)} className='block border-0 rounded-full py-2 px-3  hover:bg-slate-300 sm:p-0'><Button variant='ghost'>Create Event</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavigationMenu className='bg-white fixed w-full z-20 top-0 start-0 border-b'>
                <NavigationMenuList className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
                    <NavigationMenuItem className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link href="/">
                            <NavigationMenuLink className=''>
                                <Image src="/eventbrite-logo.png" width={150} height={100} alt='logo-pic' />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='relative w-full md:w-4/6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3' fill='none' viewBox="0 0 50 50" stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                        <Input type='text' placeholder='Search events' className='pl-12 pr-4 w-full border rounded-full border-gray-200' />
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Login</Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Sign Up</Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <p>batas</p>
            <NavigationMenu className='bg-white fixed w-full z-20 top-0 start-0 border-b'>
                <NavigationMenuList className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
                    <NavigationMenuItem className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link href="/">
                            <NavigationMenuLink>
                                <Image src="/eventbrite-logo.png" width={150} height={100} alt='logo-pic' />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='relative w-full md:w-4/6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3' fill='none' viewBox="0 0 50 50" stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                        <Input type='text' placeholder='Search events' className='pl-12 pr-4 w-full border rounded-full border-gray-200' />
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Login</Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Sign Up</Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Find Event</Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0'>
                        <Button variant='ghost'>Create Event</Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>


    )
}

export default Navbar