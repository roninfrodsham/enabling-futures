import { useState, Fragment } from "react"
import { useActionData } from "@remix-run/react"
import type { MetaFunction, ActionFunction, ActionArgs } from "@remix-run/cloudflare"
import { Dialog, Transition } from "@headlessui/react"
import { handleUpload } from "~/utils/upload.server";

import Header from "./components/Header"
import Container from "./components/Container"
import Button from "./components/Button"
import UploadForm from "./components/UploadForm"
import Footer from "./components/Footer"

import coachHouse from "~/assets/the_coach_house.jpg"
import ofsted from "~/assets/ofsted_outstanding.png"

export const meta: MetaFunction = () => ({
  title: "The Coach House - 6 Bedroom Ofsted Outstanding Residential Child Care",
})

export const action: ActionFunction = async ({ request, context }: ActionArgs) => {
  return handleUpload(request, context)
}

export default function CoachHouse() {
  const actionData = useActionData()
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
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center">
                <div>
                  <h1 className="font-display text-4xl tracking-tight text-sky-600 sm:text-4xl">
                    The Coach House
                  </h1>
                  <p className="mt-4 mb-6 text-lg tracking-tight text-slate-700">
                    Our Ofsted outstanding, 6 bedroom provision for children and young people set in approximately 10 acres of land.
                  </p>
                  <Button variant="solid" className="mb-8" color="blue" onClick={openModal}>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 flex-none fill-blue-400 group-active:fill-current fill-yellow-400"
                    >
                      <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                    </svg>
                    <span className="ml-3">Flythrough Video</span>
                  </Button>
                  <img src={ofsted} className="w-20" alt="Ofsted Outstanding" />
                </div>
              </div>
              <img src={coachHouse} className="rounded-xl" alt="The Coach House" />
            </div>
          </div>
          <div className="mt-20 md:mt-32 md:block">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">
              <div className="pr-1 mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Overview</h3>
                <p className="mb-2 text-sm">The Coach House is a large detached property situated in approximately 10 acres of land in a very beautiful and picturesque setting. The location is rural/green belt, approximately 1 mile from Tintwistle village which is located in the High Peak District.</p>
                <p className="text-sm">There are 6 bedrooms, for the use of children/young people and all bedrooms are personalised and decorated to a high standard, and the child's/young person's privacy will be respected at all times. Children and young people will be enabled to spend time in their own bedroom, but emphasis and encouragement will be placed on social and recreational activity and learning, so the use of the communal living areas will be encouraged.</p>
              </div>
              <div className="pr-1  mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Provision</h3>
                <p className="mb-2 text-sm">We will provide the highest standard and quality of care for children and young people with disabilities.  Each child/young person will be provided with an individual care placement plan that will reflect his/her EHC plans as devised and delivered by their local authority as required by statute. The plan will be designed to enable development of skills and maximise potential and achieve realistically set objectives and outcomes as agreed in their LAC reviews and other planning meetings through participation in a range of appropriate activities in a stimulating, positive, safe and nurturing environment.</p>
                <p className="text-sm">Enabling Futures believes a quality service can only be achieved if we, as a company and a team, work together to the same fundamental values. These values must place the children and young people at the centre of the service planning and delivery.</p>
              </div>
              <div className="pr-1">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Ethos</h3>
                <p className="mb-2 text-sm">The ethos of The Coach House is to provide a warm, consistent and nurturing approach that will allow children and young people to grow and learn about expressing their feelings in a safe and stable environment.  Encourage the children and young people to care and respect themselves, others, and their environment. To encourage enthusiasm for learning and enjoying life experiences.</p>
                <p className="text-sm">The philosophy of The Coach House is to provide a child-centred, positive service that will meet the individual needs of each child, to ensure that the culture and atmosphere of the home, is that all the children and young people are treated with unconditional positive regard and to ensure that all children and young people involved with the home are treated with dignity and respect in an environment free from discriminatory practice.  We do and will continue to strive to promote best possible and positive outcomes for the children and young people for whom we care.</p>
              </div>
            </div>
          </div>
        </Container>
        </section>
      </main>
      <UploadForm />
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
                      <source src="https://enablingfutureltd.s3.amazonaws.com/coach_house_final_360p.mp4" type="video/mp4" />
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