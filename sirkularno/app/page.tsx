import { Button } from "@/components/ui/button";
import FooterBar from "@/components/ui/footer";
import Navbar from "@/components/ui/nav";
import Sidebox from "@/components/ui/sideboxes";
import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      {/* Top */}
      <div className="relative h-[40rem] w-full flex items-center justify-center"> 
        <div className="absolute inset-0 bg-[url(/trash.jpg)] bg-cover bg-center opacity-75 -z-10 border-b-5 border-green-800"></div>
        
        <div className="bg-white p-8 rounded-lg shadow-xl z-10">
          <Typography variant="h1" isBold>Sirkulærøkonomi</Typography>
          <Typography>Hva er det, og hvordan kan vi delta i det?</Typography>
        </div>
      </div>

      { /* Main Content */}
      <div className="flex flex-col justify-center items-center p-5">
        <Sidebox direction="right" imagePath="/sirkel.png" size={600}>
          <div>
            <Typography variant="h2" isBold isUnderscore>Kampen om Ressurser</Typography>
            <Typography>Vi har ikke uendelig med ressurser på jorden.</Typography>
            <Typography>Mye av det vi har, er allerede blitt brukt, og vi risikerer å gå tom i den nære fremtiden.</Typography>
            <Typography spacer>Sirkeløkonomien handler om å bruke igjen det vi allerede har brukt, så vi slipper å hente ut nye materialer.</Typography>
          </div>
        </Sidebox>

        <Sidebox direction="left" imagePath="/linje.png" size={200}>
          <div>
            <Typography variant="h2" isBold isUnderscore>Vi kan ikke fortsette slik.</Typography>
            <Typography>Vi har ikke ressurser nok til å fortsette slik for alltid.</Typography>
            <Typography>Derfor er det viktig å gjøre hva vi kan for å delta i den sirkulære økonomien.</Typography>
          </div>
        </Sidebox>
      </div>

      <div className="bg-green-500 p-5"> { /* I am very Green */}
        <div>
          <Typography variant="h2" isBold isCentered>Lær mer om hvordan du kan hjelpe!</Typography>
          <Typography isCentered>Vi kan ikke virkelig bli sirkulære uten din hjelp.</Typography>
          <Link href={"/learn"} className="flex justify-center mt-5"> 
            <Button variant={"default"} className="p-6">Les mer</Button>
          </Link>
        </div>
      </div>

      <FooterBar></FooterBar> {/* Footerbar */}
    </div>
  );
}