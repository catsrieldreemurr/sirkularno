import Link from "next/link"
import { ReactNode } from "react"
import Typography from "./typography"

interface setprops{
    children: ReactNode
    linkDestination: string
    variant?: string
}

export default function NavbarLink({children, linkDestination, variant}:setprops){
    return (
        <Link href={linkDestination} className="hover:underline hover:text-slate-700 sm:p-0 p-5"><Typography variant={variant || "h3"} isBold>{children}</Typography></Link>
    )
}