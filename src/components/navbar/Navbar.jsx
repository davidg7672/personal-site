import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
    return (
        <header className={classes.header}>
            <nav className={`${classes.container} ${classes.lato}`}>
                <div className={classes.brand}>
                    <a href="#header">
                        <h2 className={classes.logo}>DAVID SOSA</h2>
                    </a>
                </div>
                <div className={classes.linksContainer}>
                    <a href="#about" className={classes.link}>
                        ABOUT
                    </a>
                    <a href="#education" className={classes.link}>
                        EDUCATION
                    </a>
                    <a href="#projects" className={classes.link}>
                        PROJECTS
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
