import React from "react";
import classes from "./about.module.css";
import image from "../../images/david-with-lion.png";

const About = () => {
    return (
        <>
            <main>
                <div className={classes.container}>
                    <div className={classes.console}></div>
                    <div className={classes.image}>
                        <img src={image} alt="david in leavenworth" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
