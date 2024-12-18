import React from "react";
import { Typewriter } from "react-simple-typewriter";
import classes from "./introduction.module.css";
import image from "../../images/david-in-leavenworth.png";

const Introduction = () => {
    const words = [
        "Software Developer",
        "Runner",
        "Traveler",
        "Reader",
        "Cook",
    ];

    return (
        <>
            <div className={classes.container}>
                <div className={classes.itemOne}>
                    <img
                        className={classes.image}
                        src={image}
                        alt="david in leavenworth"
                    />
                </div>
                <div className={classes.itemTwo}>
                    <div className={classes.name}>
                        <h1>David Sosa</h1>
                        <span>Welcome to my story</span>
                    </div>
                    <br />
                    <div className={classes.typewriter}>
                        <span>I'm a </span>
                        <Typewriter
                            words={words}
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={2000}
                            loop={0}
                            cursor={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;
