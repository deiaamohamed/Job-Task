import HeroHeader from "./HeroHeader"
import HeroSection from "./HeroSection"
import HeroFeatures from "./HeroFeatures"
import HeroStats from "./HeroStats"
import HeroFooter from "./HeroFooter"

function HeroApp() {
    return (
        <main className="text-white bg-[#0c0c0c] min-h-screen">
            <HeroHeader />
            <HeroSection />
            <HeroFeatures />
            <HeroStats />
            <HeroFooter />
        </main>
    )
}

export default HeroApp

