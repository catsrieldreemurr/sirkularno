import Image from "next/image";

export default function Navbar(){
    return (
        <nav className="bg-green-400 p-5 text-2xl flex justify-center items-center gap-10">
            <Image src={"/RecycleBig.png"} alt="RecyclingLogo" height={50} width={50}></Image>
            <h1 className="font-bold">SirkulærNO</h1>
        </nav>
    )
}