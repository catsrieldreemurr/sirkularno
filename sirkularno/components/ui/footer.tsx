import Image from "next/image";
import Typography from "./typography";

export default function FooterBar(){
    return (
        <footer className="bg-green-700 p-5 flex flex-col sm:flex-row gap-5 text-white mt-5">

            <div className="w-full sm:w-1/3 flex justify-center items-center gap-5 pt">
                <Image src={"/recycleGreen.png"} height={100} width={100} alt="Recycle" className="bg-white rounded-full"></Image>
                <Typography variant="h1" isBold isUnderscore>Bli Sirkulær</Typography>
            </div>
            <div className="w-full sm:w-1/3 flex justify-cebter items-center gap-5">
                <Typography variant="h1" isBold isUnderscore>Les Mer</Typography>
            </div>
            <div className="w-full sm:w-1/3">
                <h1>test</h1>
            </div>
        </footer>
    )
}