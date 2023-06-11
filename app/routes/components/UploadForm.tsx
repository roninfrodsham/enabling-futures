import { useState } from "react"
import { Form, useActionData } from "@remix-run/react"

import Container from "./Container"
import Button from "./Button"

import backgroundImage from '~/assets/background-cv.jpg'

export default function UploadForm() {
  // let showForm = false;
  // if (typeof window !== 'undefined') {
  //   const storage = localStorage.getItem("test")
  //   if(storage !== undefined) {
  //     showForm = true;
  //   }
  // }
  
  const actionData = useActionData()
  const [showForm, setShowForm] = useState(false)
  const [allowPost, setAllowPost] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event !== null) {
      const size = event.target.files![0].size
      if(size > 1000000) {
        setAllowPost(false)
        setErrorMessage("Your CV is too large to upload. There is a 1MB limit.")
      } else {
        setAllowPost(true)
        setErrorMessage("")
      }
      return
    }
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    if (allowPost === false) {
      event.preventDefault();
    }
  }

  return (
    (showForm &&
      <section className="relative overflow-hidden bg-blue-600 py-32">
        <img
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
        />
        <Container className="relative">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              We would love to hear from you
            </h2>
            {
              (actionData && actionData.success) ? (
                <p className="mt-4 mb-8 text-lg tracking-tight text-white">
                  {actionData.success}
                </p>
              ) : (
                <>
                  <p className="mt-4 mb-8 text-lg tracking-tight text-white">
                    Upload your CV directly to our HR department. We only accept Word Documents and PDF files. 
                  </p>
                  <Form name="uploadcv" method="post" onSubmit={onSubmit} encType="multipart/form-data" className="text-white">
                    { 
                      actionData && actionData.error && (
                        <p className=" mb-4 text-md font-semibold tracking-tight text-slate-900">{actionData.errorMessage}</p>
                      )
                    }
                    {
                        errorMessage !== "" && (
                        <p className=" mb-4 text-md font-semibold tracking-tight text-slate-900">{errorMessage}</p>
                      )
                    }
                    <input onChange={(e) => handleChange(e)} className="font-display text-sm cursor-pointer rounded-full border border-solid border-white bg-clip-padding mr-4 mb-4 px-3 py-[0.32rem] font-semibold leading-[2.15] text-white transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-white file:px-4 file:py-[0.32rem] file:text-slate-900 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" id="cv" type="file" name="cv" />
                    <Button color="white">Upload Document</Button>
                  </Form>
                </>
              )
            }
          </div>
        </Container>
      </section>
    )
  )
}