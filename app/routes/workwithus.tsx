import { useState, Fragment } from "react"
import type { MetaFunction } from "@remix-run/cloudflare"
import { Dialog, Transition } from "@headlessui/react"

import Header from "./components/Header"
import { Container } from "./components/Container"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"

import bespokeServices from "~/assets/bespoke_services.jpg"
import ofsted from "~/assets/ofsted_outstanding.png"
import coachHouseVideo from "~/assets/coach_house.mp4"

export const meta: MetaFunction = () => ({
  title: "The Coach House - 6 Bedroom Ofsted Outstanding Residential Child Care",
})

export default function Index() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Header />
      <main>
        <section
        id="testimonials"
        aria-label="The Coach House"
        className="py-10"
        >
        <Container>
           
        </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}