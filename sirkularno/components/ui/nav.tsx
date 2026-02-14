import Image from "next/image";
import Typography from "./typography";

export default function Navbar(){
    return (
        <nav className="bg-green-400 p-5 text-2xl flex justify-center items-center gap-10 border-b-5 border-green-600">
            <Image src={"/RecycleBig.png"} alt="RecyclingLogo" height={50} width={50}></Image>
            <Typography variant="h1" isBold>Bli Sirkulær</Typography>
        </nav>
    )
}