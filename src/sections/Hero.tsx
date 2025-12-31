import HeroExperience from "../components/Hero/Models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import HeaderText from "../components/Hero/HeaderText";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                <header className="flex-center xl:w-1/2 w-full order-2 xl:order-1">
                    <HeaderText />
                </header>

                <div className="xl:w-1/2 w-full h-full order-1 xl:order-2 relative xl:-top-20 -top-6">
                    <HeroExperience />
                </div>
            </div>

            <AnimatedCounter />

        </section>
    )
}

export default Hero;