import { useState, Fragment } from "react"
import type { MetaFunction } from "@remix-run/cloudflare"
import { Dialog, Transition } from '@headlessui/react'

import Header from "./components/Header"
import { Container } from "./components/Container"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"

import millbrookHouse from '~/assets/millbrook_house.jpg'
//import coachHouseVideo from '~/assets/coach_house.mp4'

export const meta: MetaFunction = () => ({
  title: "Millbrook House - 8-bed residential home for children and young people",
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
        aria-label="Millbrook House"
        className="py-10"
        >
        <Container>
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center">
                <div>
                  <h2 className="font-display text-4xl tracking-tight text-sky-600 sm:text-4xl">
                    Millbrook House
                  </h2>
                  <p className="mt-4 mb-6 text-lg tracking-tight text-slate-700">
                    8-bed residential home for children and young people set in approximately 10 acres of land.
                  </p>
                  <Button variant="outline">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 flex-none fill-blue-400 group-active:fill-current"
                    >
                      <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                    </svg>
                    <span className="ml-3" onClick={openModal}>Flythrough Video</span>
                  </Button>
                </div>
              </div>
              <img src={millbrookHouse} className="rounded-xl" />
            </div>
          </div>
          <div className="mt-20 md:mt-32 md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              <div className="pr-1 mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Overview</h3>
                <p className="mb-2 text-sm">Millbrook House is a quality specialist 8-bed residential home specialising in looking after young people and adults with learning disabilities, Autism, mental ill health and complex and additional needs. The Home offers long term residential placements and its primary function is to deliver the highest standard and quality of care to meet the needs of young people and adults. The Home has been adapted to meet the needs of some adults with physical disabilities.</p>
                <p className="mb-2 text-sm">The home offers specialist and quality care, including planning and implementing transitions into Millbrook, providing support and consistency throughout the transition process. Each person using the service will be provided with an Individualised Person Centered Plan. The plan will be designed to enable development of skills and maximise potential through participation in a range of appropriate activities in a stimulating, positive, safe and nurturing environment. Detailed person centered planning ensures that the correct staffing levels are implemented with regards to meeting the individual needs. The emphasis is focused on promoting independence, supporting people to lead an active and fulfulled life style while ensuring their safety.</p>
                <p className="text-sm">Millbrook House is a large detached property situated in its own grounds. The location is rural/green belt, approximately 1 mile from Tintwistle village and is within easy reach of public transport links. The home has mature gardens, approximately 10 acres of land, and is in a very beautiful and picturesque setting. The town of Glossop is 4 miles away with ample amenites, shops, bars, restaurants, leisure and recreational facilities.</p>
              </div>
              <div className="pr-1  mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Values of the Home</h3>
                <p className="mb-2 text-sm">We believe that residential care should provide Individuals with the very best support possible from a committed staff team, in a safe, caring and nurturing environment.</p>
                <p className="mb-2 text-sm">We have a responsibility to ensure that the Individuals in residential care live in a harm free environment and are protected from abuse and neglect.</p>
                <p className="mb-2 text-sm">The care provided in the Home should form part of a network of services, ensuring that the needs of the individual are met fully.</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Dignity and Respect</span> - recognising the value of individuals, their uniqueness and their right to be treated with dignity and respect.</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Equality</span> - ensuring that the services and facilities of the home are accessible and available to all. The people will not be judged with regards to their circumstances, backgrounds and lifestyles, similarly they will not be discriminated against on the grounds of race, culture, language, religious beliefs, gender, sexuality or disability.</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Quality</span> - promoting a high quality service which is based on legal requirements and government legislation, ensuring that high standards and good practice is maintained.</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Independence</span> - show commitment to provide opportunities for the people to think and act independently whilst ensuring their safety, to allow the Individuals to take measured risks, that will enable them to learn, progress and develop.</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Rights</span> - ensuring the people's rights and entitlements are respected as set out in the United Nations Convention of the Human Rights Act. Acknowledging that with rights comes responsibilities. The Company recognises that each individual should be supported to make informed choices regarding their life, welfare and care. Acknowledging the governmental guidance in accordance with Mental Capacity Act 2005 (amended 2011).</p>
                <p className="mb-2 text-sm"><span className="font-display tracking-tight text-sky-600">Development and fulfilment</span> - recognition that people with disabilities are people first, and that they should not be disadvantaged because of their disability.</p>
              </div>
            </div>
          </div>
        </Container>
        </section>
      </main>
      <Footer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 sm:p-10 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button type="button" onClick={closeModal} className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2">
                    <video controls width="100%">
                      <source src="" type="video/mp4" />
                    </video>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}