import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import TrendingMovies from "./TrendingMovies";
import Footer from "./Footer.js";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <TrendingMovies />
            <Footer />
        </>
    );
}

export default LandingPage;