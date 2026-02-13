import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode

    isBold?: boolean
    spacer?: boolean
    variant?: string
    isUnderscore?: boolean
    isItalic?: boolean
}

export default function Typography({children, isBold, spacer, variant, isUnderscore, isItalic}:SetProps){
    if(variant === "h1"){
        return <h1 className={`text-2xl ${isBold && 'font-bold'}`}>{children}</h1>
    }
}