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
                <Typography variant="h1" isBold isCentered>Sirkeløkonomien innenfor IT industrien</Typography>
                <Typography isCentered>Hvordan IT industrien kan bli gjort mer sirkulær.</Typography>
            </div>

            <div className="p-5">
                <div className="flex justify-center m-5">
                    <Link href={"/"}> <Button variant="default">Gå tilbake</Button> </Link>
                </div>

                <div className="flex flex-col items-center justify-center mb-[5rem]">
                    <Typography variant="h2" isBold>Hvordan er IT industrien ikke sirkulær?</Typography>
                    <Typography>I dag er IT-industrien en av de største industriene vi kjenner til.</Typography>
                    <Typography>Bak nesten alt vi gjør og stoler på ligger IT industrien.</Typography>
                    <Typography>Så hvordan kan vi gjøre den mer sirkulær og vennlig for miljøet?</Typography>
                </div>

                <Sidebox direction="right" imagePath="/framework.png" size={300}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Right to Repair</Typography>
                        <Typography>Mange elektroniske enheter blir produsert for å bli ødelagt, uten at de kan repareres.</Typography>
                        <Typography>Hvis du må kjøpe nytt, se etter produkter som kan enklelt bli tatt fra hverandre og reparert.</Typography>
                        <Typography spacer> Støtt selskaper som lager produkter som kan repareres, som Framework.</Typography>
                    </div>
                </Sidebox>

                <Sidebox direction="left" imagePath="/paas.jpg" size={350}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Lenger Bruktid</Typography>
                        <Typography>Visste du at mange selskaper bare beholder de elektroniske enhetene sine i rundt 3 år?</Typography>
                        <Typography>Levetiden til disse enhetene kan godt overleve mer enn 3 år i bruk, hvis de er behandlet riktig.</Typography>
                        <Typography>Noen selskaper selger også disse enhetene når de er ferdige med dem.</Typography>

                        <Typography spacer>Se etter refurbished IT-utstyr når du skal oppgradere.</Typography>
                    </div>
                </Sidebox>

                <Sidebox direction="right" imagePath="/paas2.jpg" size={300}>
                    <div>
                        <Typography variant="h2" isBold isUnderscore>Product-as-a-Service (PaaS)</Typography>
                        <Typography>Selskaper trenger ikke alltid å eie alt, og leie av tjenester er ofte nok.</Typography>
                        <Typography>Ved å leie maskinvare i stedet for å kjøpe selv, så senker vi kravet på maskinvare.</Typography>
                        <Typography>Ved at maskinvaren blir leiet ut, oppfordrer det selskapene som eier dem til å gjøre det lettere å reparere i fremtiden.</Typography>
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