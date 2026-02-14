import Image from "next/image"
import { Children, ReactNode } from "react"

interface SetProps{
    children?: ReactNode
    direction?: string
    imagePath: string
    size?: number
    textDirection?: string
}

export default function Sidebox({children, imagePath, direction, size, textDirection}:SetProps){
    if (direction === "right"){
        return (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-5 ">
                <div className={`flex flex-col w-90 text-center ${textDirection === "right" ? 'sm:text-right' : "sm:text-center"} wrap-break-word`}>
                    {children}
                </div>

                <Image src={imagePath} height={size || 250} width={size || 250} alt="image" className="rounded-lg"></Image>
            </div>
        )
    }
    
    else {
        return (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-5">
                <Image src={imagePath} height={size || 250} width={size || 250} alt="image" className="rounded-lg"></Image>
                
                <div className={`flex flex-col w-90 text-center ${textDirection === "right" ? 'sm:text-right' : "sm:text-center"} wrap-break-word`}>
                    {children}
                </div>

                
            </div>
        )
    }
        
    
}