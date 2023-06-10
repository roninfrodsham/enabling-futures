import { useActionData } from "@remix-run/react"
import type { MetaFunction, ActionFunction, ActionArgs } from "@remix-run/cloudflare"
import { handleUpload } from "~/utils/upload.server";

import Header from "./components/Header"
import Container from "./components/Container"
import UploadForm from "./components/UploadForm"
import Footer from "./components/Footer"

import bespokeServices from '~/assets/bespoke_services.jpg'

export const meta: MetaFunction = () => ({
  title: "Bespoke services - Millbrook Apartment and Riverbank are clinically led and offer bespoke and holistic packages of care for children/young people",
})

export const action: ActionFunction = async ({ request, context }: ActionArgs) => {
  return handleUpload(request, context)
}

export default function BespokeServices() {
  const actionData = useActionData()

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
                    Bespoke Services
                  </h1>
                  <p className="mt-4 mb-4 text-lg tracking-tight text-slate-700">
                    Our clinically led, bespoke and holistic packages of care for children, young people and adults with learning disabilities and/or autism, behaviours of concern or mental health conditions.
                  </p>
                </div>
              </div>
              <img src={bespokeServices} className="rounded-xl" />
            </div>
          </div>
          <div className="mt-20 md:mt-32 md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              <div className="pr-1 mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Millbrook Apartment</h3>
                <p className="mb-2 text-sm">Millbrook Apartment is a solo occupancy created within Millbrook House, which is a very large, listed building situated in its own grounds, known as Millbrook Estate. The location is rural/green belt, approximately 1 mile from Tintwistle village which is located in the High Peak District. Millbrook Apartment is a two-storey building having a ground level floor and a basement.</p>
                <p className="text-sm">The ground floor has been extensively adapted to accommodate a child/young person who may have a wide range of disabilities. The ground floor incorporates one lounge, which is very large and spacious and comfortably furnished a bespoke kitchen area a sensory/quite room and a fully adapted WC. The lower level consists of a bespoke bedroom, which has been designed to meet the requirements of individuals who have sensory needs relating to light and sound stimulus. The basement bedroom has been designed to keep out natural light and mood lighting has been installed to give individuals natural arousal with sound proofing to reduce distractions and disturbed sleep. The basement is very well-equipped to meet the needs of individual who display behaviours of concern with an adapted en-suite wet room and dressing area. There is also a separate rest space and laundry/utilities area.</p>
              </div>
              <div className="pr-1  mb-4">
                <h3 className="mb-3 font-display text-2xl tracking-tight text-sky-600">Riverbank</h3>
                <p className="mb-2 text-sm">Riverbank is a dual occupancy provision created in the lower ground floor of Millbrook House and is a self-contained, separate dwelling having all rooms conveniently located on the same level. The lower ground floor incorporates one lounge, which is very spacious and comfortably furnished, a bespoke kitchen area and two bespoke bedrooms with en-suite wet room facilities, designed to meet the requirements of individuals who have sensory needs.</p>
                <p className="text-sm">Each bedroom has a single diamond shaped window, which can be easily designed to keep out natural light and mood lighting may be installed to give individuals natural arousal with sound proofing to reduce distractions and disturbed sleep. The main bathroom is a spacious wet room, and consists of a bath, WC, sink and shower. The layout has been designed to accommodate sensory bathing and water play opportunities.</p>
              </div>
            </div>
          </div>
        </Container>
        </section>
        <UploadForm />
      </main>
      <Footer />

    </>
  );
}