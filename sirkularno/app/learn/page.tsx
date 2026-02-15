import { Button } from "@/components/ui/button";
import FooterBar from "@/components/ui/footer";
import Navbar from "@/components/ui/nav";
import Sidebox from "@/components/ui/sideboxes";
import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>

            <div className="h-[40rem] flex justify-center items-center flex-col bg-gray-200 border-3 border-b-green-600">
                <Typography variant="h1" isBold>Hva kan jeg gjøre??</Typography>
                <Typography isCentered>Hvordan kan du delta i den sirkulære økonomien? Det er faktisk ganske lett.</Typography>
            </div>

            <div className="p-5">
                <div className="flex justify-center m-5">
                    <Link href={"/"}> <Button variant="default">Gå tilbake</Button> </Link>
                </div>
                
                <Typography variant="h2" isCentered isBold>Hva DU kan gjøre</Typography>

                <Sidebox direction="left" imagePath="/buyLess.png" size={250}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Kjøp Brukt, Ikke Nytt</Typography>
                        <Typography>Mange produkter kan vare i flere år.</Typography>
                        <Typography>Det finnes mange som selger brukte produkter digitalt, på markedssteder som Finn.no eller Facebook Marketplace.</Typography>
                        <Typography spacer>Brukte produkter putter mindre press på naturressursene våre, og kan fungere like bra som hvis den var ny.</Typography>
                    </div>
                </Sidebox>


                <Sidebox direction="right" imagePath="/framework.png" size={300}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Right to Repair</Typography>
                        <Typography>Mange produkter i dag, hvertfall elektroniske enheter blir produsert for å bli ødelagt, uten at de kan repareres.</Typography>
                        <Typography>Hvis du må kjøpe nytt, se etter produkter som kan enklelt bli tatt fra hverandre og reparert.</Typography>
                        <Typography spacer> Støtt selskaper som lager produkter som kan repareres.</Typography>
                    </div>
                </Sidebox>

                <Sidebox direction="left" imagePath="/recycling.jpg" size={300}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Resirkuler, ikke kast</Typography>
                        <Typography>Materialer kan brukes igjen og igjen.</Typography>
                        <Typography>Hvis du har noe du ikke kan reparere, så burde du resirkulere dem.</Typography>
                        <Typography>Resirkulering gir materialene en ny sjanse på liv, og reduserer presset på våre naturlige materialer.</Typography>
                    </div>
                </Sidebox>

                <Sidebox direction="right" imagePath="/sell.jpg" size={300}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Leie, ikke eie</Typography>
                        <Typography>Alle trenger ikke å eie alt.</Typography>
                        <Typography>Hvis det er mulig, burde du leie ting når du kan. Det finnes mange steder hvor du kan låne all slags utsyr, som BUA.</Typography>
                        <Typography>Hvis du må eie noe, så del den med andre. Jo mindre som kjøpes nytt, jo mindre press putter vi på miljøet.</Typography>
                    </div>
                </Sidebox>
            </div>

            <div className="bg-green-500 p-5"> { /* I am very Green */}
                <div>
                    <Typography variant="h2" isBold isCentered>Bli Sirkulær</Typography>
                    <Typography isCentered>Med din hjelp kan vi bli sirkulære sammen.</Typography>
                </div>
            </div>

            <FooterBar></FooterBar>
        </div>
    )
}