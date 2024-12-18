import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={classes.header}>
                <nav className={classes.container}>
                    <div className={classes.item}>
                        <a href="#header">
                            <h1>David Sosa</h1>
                        </a>
                    </div>
                    <div className={classes.linksContainer}>
                        <div className={classes.about}>
                            <a href="#about">
                                <span>About</span>
                            </a>
                        </div>
                        <div className={classes.education}>
                            <a href="#education">
                                <span>Education</span>
                            </a>
                        </div>
                        <div className={classes.project}>
                            <a href="#projects">
                                <span>Projects</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
