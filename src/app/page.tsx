'use client';

import EventCards from "@/components/EventCards"
import Jumbotron from "@/components/Jumbotron"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <EventCards />
    </main>
  )
}