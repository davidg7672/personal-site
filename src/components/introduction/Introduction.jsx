import React from "react";
import { Typewriter } from "react-simple-typewriter";
import classes from "./introduction.module.css";
import image from "../../images/david-in-leavenworth.png";

const Introduction = () => {
    const words = [
        "I'm a Software Developer",
        "I'm also runner",
        "Huge music fan",
        "Big fan of reading literature",
        "Connoisseur of traveling the world and eating good food",
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
                        <Typewriter
                            words={words}
                            typeSpeed={150}
                            deleteSpeed={150}
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
