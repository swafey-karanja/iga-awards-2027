import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Programme from "@/components/sections/Programme";
import Venue from "@/components/sections/Venue";
import Gallery from "@/components/sections/Gallery";
import Press from "@/components/sections/Press";
import HouseNotes from "@/components/sections/HouseNotes";
import Faq from "@/components/sections/Faq";
import AwardCategories from "@/components/sections/AwardCategories";

export default function Home() {
    return (
        <>
            <Header />
            <main id="main">
                <Hero />
                <Experience />
                <AwardCategories />
                <Programme />
                <Venue />
                <Gallery />
                <Press />
                <HouseNotes />
                <Faq />
            </main>
            <Footer />
        </>
    );
}