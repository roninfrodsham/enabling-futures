import { useActionData, useLoaderData } from "@remix-run/react"
import type { MetaFunction, ActionFunction, ActionArgs, LoaderArgs } from "@remix-run/cloudflare"
import { handleUpload } from "~/utils/upload.server";

import Header from "./components/Header"
import Hero from "./components/Hero"
import UploadForm from "./components/UploadForm"
import Footer from "./components/Footer"

export const meta: MetaFunction = () => ({
  title: "Enabling Futures Ltd - Ofsted Outstanding Residential Care Provider",
})

export const action: ActionFunction = async ({ request, context }: ActionArgs) => {
  return handleUpload(request, context)
}

export default function Index() {
  const actionData = useActionData()
  console.log("ACTIONDATA", actionData);
  const loaderData = useLoaderData()

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <UploadForm />
      <Footer />
    </>
  );
}
