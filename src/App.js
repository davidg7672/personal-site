import React from "react";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about-me/About";
// import Education from "./components/education/Education";

const App = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <About />
            {/* <Education /> */}
        </>
    );
};

export default App;
