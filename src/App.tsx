import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
// import Logo from "./sections/Logo";
import ShowCase from "./sections/ShowCase";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
    return (
        <main className="md:px-20 px-6">
            <div className="aurora-bg" />
            <Navbar />
            <Hero />
            <ShowCase />
            {/* <Logo /> */}
            <FeatureCards />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}

export default App;