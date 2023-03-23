import { Link } from "@remix-run/react"
import { useLocation } from 'react-router-dom'

export function NavLink({ href, children }: {href: string, children: string}) {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={`inline-block rounded-lg py-1 px-2 text-sm text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${location.pathname === href && "bg-slate-100 text-slate-900"}`}
    >
      {children}
    </Link>
  )
}
