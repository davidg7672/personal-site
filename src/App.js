import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about-me/About";
import Education from "./components/education/Education";
import Introduction from "./components/introduction/Introduction";

const App = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <About />
            <Education />
        </>
    );
};

export default App;
