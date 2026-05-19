import Image from "next/image"
import { ReactNode } from "react"

interface SetProps{
    iconPath: string
    imageAlt: string
    children: ReactNode
}

export default function AssignIcon({iconPath, imageAlt, children}:SetProps){
    return (
        <div className="flex flex-row justify-center items-center gap-5">
            <Image src={iconPath} height={25} width={25} alt={imageAlt}></Image>
            <div>{children}</div>
        </div>
    )
}