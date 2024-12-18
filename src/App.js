import React from "react";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about-me/About";
import Education from "./components/education/Education";
import classes from "./app.module.css";

const App = () => {
    return (
        <>
            <div className={classes.container}>
                <Navbar />
                <Introduction />
                <About />
                <Education />
            </div>
        </>
    );
};

export default App;
