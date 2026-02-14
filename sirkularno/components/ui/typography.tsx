import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode

    isBold?: boolean
    spacer?: boolean
    variant?: string
    isUnderscore?: boolean
    isItalic?: boolean
    isCentered?: boolean
}

export default function Typography({children, isBold, spacer, variant, isUnderscore, isItalic, isCentered}:SetProps){
    if(variant === "h1"){
        return <h1 className={`text-3xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'}`}>{children}</h1>
    }
    else if(variant === "h2"){
        return <h2 className={`text-2xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'}`}>{children}</h2>
    }
    else if (variant === "h3"){
        return <h3 className={`text-xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'}`}>{children}</h3>
    }
    else if (variant === "h4"){
        return <h4 className={`text-lg ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'}`}>{children}</h4>
    }

    else {
        return <p className={`text-md ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'}`}>{children}</p>
    }
}