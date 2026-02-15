import Image from "next/image";
import Typography from "./typography";
import Link from "next/link";

const linkStyle = "hover:underline hover:font-bold text-lg"

export default function FooterBar(){
    return (
        <footer className="bg-green-700 p-5 flex flex-col sm:flex-row gap-5 text-white mt-5 ">

            <div className="w-full sm:w-1/3 flex justify-center items-start gap-5 pt">
                <Image src={"/recycleGreen.png"} height={100} width={100} alt="Recycle" className="bg-white rounded-full hidden sm:flex"></Image>
                <div className="flex flex-col justify-center items-center">
                    <Typography variant="h1" isBold isUnderscore>Bli Sirkulær</Typography>
                    <Typography>Miljøet trenger oss.</Typography>
                </div>
            </div>
            <div className="w-full sm:w-1/3 flex justify-center items-start gap-5">
                <div className="flex flex-col justify-center items-center">
                    <Typography variant="h1" isBold isUnderscore>Undersider</Typography>
                    <Link href={"/"} className={linkStyle}>- Main</Link>
                    <Link href={"/learn"} className={linkStyle}>- Les mer</Link>
                </div>
                
            </div>

            <div className="w-full sm:w-1/3 flex justify-center items-start gap-5">
                <div className="flex flex-col justify-center items-center">
                    <Typography variant="h1" isBold isUnderscore>Andre Ressurser</Typography>
                    <Link href={"https://www.miljodirektoratet.no/ansvarsomrader/avfall/sirkular-okonomi/"} className={linkStyle}>- Miljødirektoratet</Link>
                    <Link href={"https://snl.no/sirkul%C3%A6r_%C3%B8konomi"} className={linkStyle}>- Store Norske Leksikon</Link>
                    <Link href={"https://ndla.no/r/tverrfaglige-temaer/hva-er-sirkular-okonomi/4b18ab4ad8"} className={linkStyle}>- NDLA</Link>
                </div>
            </div>
        </footer>
    )
}