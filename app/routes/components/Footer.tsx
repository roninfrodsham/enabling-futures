import { Link } from "@remix-run/react"

import Container from './Container'
import logo from "~/assets/efl_logo_padded.png";
import { NavLink } from './NavLink'

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
        <img src={logo} className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/coachhouse">The Coach House</NavLink>
              <NavLink href="/millbrookhouse">Millbrook House</NavLink>
              <NavLink href="/bespokeservices">Bespoke Services</NavLink>
            </div>
          </nav>
        </div>
        <div className="text-center text-sm text-slate-500 mb-6">
          <p>Enabling Futures Ltd, Millbrook House Estate, Manchester Road, Hollingworth, Hyde, Cheshire, SK14 8LA</p>
          <p><span className="block md:inline md:mr-2">Administration: <a href="mailto:admin@enablingfutures.org.uk" className="text-slate-900">admin@enablingfutures.org.uk</a></span><span>Recruitment: <a href="mailto:recruitment@enablingfutures.org.uk" className="text-slate-900">recruitment@enablingfutures.org.uk</a></span></p>
          <p><span className="block md:inline md:mr-2">The Coach House: <a href="tel:01457 764518" className="text-slate-900">01457 764518</a></span><span>Millbrook House: <a href="tel:01457 766910" className="text-slate-900">01457 766910</a></span></p>
          <p><span className="block md:inline md:mr-2">Recruitment/Business Management: <a href="tel:01457 243141" className="text-slate-900">01457 243141</a></span><span>Referrals: <a href="tel:07889 920312" className="text-slate-900">07889 920312</a></span></p>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href="https://www.facebook.com/EnablingFuturesLtd"
              className="group"
              aria-label="Enabling Futures on Facebook"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Enabling Futures Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}