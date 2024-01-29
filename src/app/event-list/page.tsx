'use client'

import EventList from '@/components/EventList'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <EventList />
        </div>
    )
}

export default page