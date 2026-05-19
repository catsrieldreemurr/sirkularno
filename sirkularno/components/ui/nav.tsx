import Image from "next/image";
import Typography from "./typography";
import NavbarLink from "./navbarLinks";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import AssignIcon from "./assignIcons";

export default function Navbar(){
    return (
        <nav className="p-5 text-2xl flex justify-between items-center gap-10 border-b-5 border-black">
            <Typography variant="h1" isBold>NordicDevices</Typography>
            
            <div className="hidden sm:flex flex-row gap-5 ">
                <AssignIcon iconPath="/info.png" imageAlt="InfoIcon">
                    <NavbarLink linkDestination="/">Om Oss</NavbarLink>
                </AssignIcon>
                
                <AssignIcon iconPath="/person.png" imageAlt="PersonIcon">
                    <NavbarLink linkDestination="/">Om Folka</NavbarLink>
                </AssignIcon>

                <AssignIcon iconPath="/devices.png" imageAlt="DeviceIcon">
                    <NavbarLink linkDestination="/">Våre Tjenester</NavbarLink>
                </AssignIcon>
            </div>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"link"} className="sm:hidden flex w-[2rem]">
                        <Image src={"/menuBlack.png"} height={35} width={35} alt="Menu"></Image>
                    </Button>
                </PopoverTrigger>

                <PopoverContent>
                    <div className="bg-white p-5 flex flex-col">
                        <AssignIcon iconPath="/info.png" imageAlt="InfoIcon">
                            <NavbarLink linkDestination="/">Om Oss</NavbarLink>
                        </AssignIcon>
                        
                        <AssignIcon iconPath="/person.png" imageAlt="PersonIcon">
                            <NavbarLink linkDestination="/">Om Folka</NavbarLink>
                        </AssignIcon>

                        <AssignIcon iconPath="/devices.png" imageAlt="DeviceIcon">
                            <NavbarLink linkDestination="/">Våre Tjenester</NavbarLink>
                        </AssignIcon>
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    )
}