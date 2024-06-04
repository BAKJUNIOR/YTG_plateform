import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from './components/about/about.jsx';
import Services from "./components/Services/Services";
import Consultation from './components/Consultation/Consultation';
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route  path="/"
                            element={
                                <>
                                    <Hero />
                                    <BlogsComp />

                                </>
                            }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/consultation" element={<Consultation />} />

                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
};

export default App;
