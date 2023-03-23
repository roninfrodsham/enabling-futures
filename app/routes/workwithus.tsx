import { useState, Fragment } from "react"
import type { MetaFunction } from "@remix-run/cloudflare"
import clsx from 'clsx'

import Header from "./components/Header"
import { Container } from "./components/Container"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"

export const meta: MetaFunction = () => ({
  title: "The Coach House - 6 Bedroom Ofsted Outstanding Residential Child Care",
})

export default function Index() {
  function SwirlyDoodle({ className }: { className: string }) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 281 40"
        className={className}
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
        />
      </svg>
    )
  }

  function CheckIcon({ className }: { className: string }) {
    return (
      <svg
        aria-hidden="true"
        className={clsx(
          'h-6 w-6 flex-none fill-current stroke-current',
          className
        )}
      >
        <path
          d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
          strokeWidth={0}
        />
        <circle
          cx={12}
          cy={12}
          r={8.25}
          fill="none"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <>
      <Header />
      <main>
        <section
          id="testimonials"
          aria-label="The Coach House"
          className="py-5"
        >
        <Container>
          <div className="md:text-center">
            <h1 className="font-display text-4xl tracking-tight text-sky-600 sm:text-4xl">
              <span className="relative whitespace-nowrap">
                <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-yellow-400/50" />
                <span className="relative">Work with us</span>
              </span>
            </h1>
            <p className="mt-4 text-lg">
              We currently have the following vacancies across our three provisions
            </p>
          </div>

          <div className="mt-20 md:block">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8">

              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-2 font-display text-lg">Support Workers</h3>
                <p className="mt-2 text-sm">
                  We are looking for people to join an experienced and motivated team of Support Workers and to make a positive impact on the lives of our children and young people. You will be responsible for the daily well-being of our service users, providing a caring and nurturing environment. The role also includes arranging and participating in activities and social events to promote positive social development.
                </p>
                <p className="order-first font-display text-3xl font-light tracking-tight text-sky-600">
                  The Coach House
                </p>
                <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm">
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">£10.00 to £10.40 ph</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">7.00am to 2.00pm (early shift)</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">1.30pm to 10.30pm (late shift)</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">7.00am to 10.30pm (double shift)</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Must be over 21 years of age to apply for this role</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Enhanced DBS check required</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Fully funded Diploma in Health and Social Care</span>
                    </li>
                </ul>
                <a
                  href="https://enablingfutureltd.s3.amazonaws.com/Application_Form_Enabling_Futures.doc"
                  className="mt-8 group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-600 text-white hover:text-slate-100 hover:bg-sky-800 active:bg-sky-900 active:text-blue-100 focus-visible:outline-blue-600"
                  aria-label="Download application"
                >
                  Download application
                </a>
              </section>

              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-2 font-display text-lg">Support Workers</h3>
                <p className="mt-2 text-sm">
                  We are looking for people to join an experienced and motivated team of Support Workers and to make a positive impact on the lives of our children and young people. You will be responsible for the daily well-being of our service users, providing a caring and nurturing environment. The role also includes arranging and participating in activities and social events to promote positive social development.
                </p>
                <p className="order-first font-display text-3xl font-light tracking-tight text-sky-600">
                  Millbrook House
                </p>
                <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm">
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">£10.00 to £10.40 ph</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Shift Plans - 8.00am to 9.30pm</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Enhanced DBS check required</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Fully funded Diploma in Health and Social Care</span>
                    </li>
                </ul>
                <a
                  href="https://enablingfutureltd.s3.amazonaws.com/Application_Form_Enabling_Futures.doc"
                  className="mt-8 group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-600 text-white hover:text-slate-100 hover:bg-sky-800 active:bg-sky-900 active:text-blue-100 focus-visible:outline-blue-600"
                  aria-label="Download application"
                >
                  Download application
                </a>
              </section>

              <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
                <h3 className="mt-2 font-display text-lg">Support Workers</h3>
                <p className="mt-2 text-sm">
                  We are looking for people who have knowledge, experience and a passion of working with adults, young people or children with learning disabilities, autism, mental ill health or behaviours of concern in order to provide the high level, specialist care required. This service will require staff to work as part of a team of three people on any shift. The successful candidate must enjoy walking and being outdoors, as the role involves supporting our service users with all outdoor activities.
                </p>
                <p className="order-first font-display text-3xl font-light tracking-tight text-sky-600">
                  Bespoke Services
                </p>
                <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm">
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Mon - Fri: 08:00-21:30 - £11.80 ph</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Sat - Sun: 08:00-21:30 - £13.80 ph</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Enhanced DBS check required</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="text-slate-400" />
                      <span className="ml-4">Fully funded Diploma in Health and Social Care</span>
                    </li>
                </ul>
                <a
                  href="https://enablingfutureltd.s3.amazonaws.com/Application_Form_Enabling_Futures.doc"
                  className="mt-8 group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-600 text-white hover:text-slate-100 hover:bg-sky-800 active:bg-sky-900 active:text-blue-100 focus-visible:outline-blue-600"
                  aria-label="Download application"
                >
                  Download application
                </a>
              </section>

            </div>
          </div>
        </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}