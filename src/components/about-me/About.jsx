import React from "react";
import classes from "./about.module.css";
import image from "../../images/david-with-lion.png";
import Console from "../console/Console";

const About = () => {
    return (
        <>
            <main>
                <div className={classes.container}>
                    <Console />
                    <div className={classes.image}>
                        <img src={image} alt="david with lion" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
