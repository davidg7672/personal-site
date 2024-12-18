import React from "react";
import classes from "./education.module.css";
import image from "../../images/university-logo.jpeg";

const Education = () => {
    return (
        <div className={classes.container}>
            <div className={classes.school}>
                <img
                    className={classes.logo}
                    src={image}
                    alt="Gonzaga University"
                />
                <div className={classes.info}>
                    <h2 className={classes.schoolName}>Gonzaga University</h2>
                    <p>B.A. Computer Science, Economics</p>
                    <p>Expected Graduation: May 2026</p>
                </div>
            </div>
            <div className={classes.coursework}>
                <div className={classes.section}>
                    <h2>Relevant Coursework</h2>
                    <ul className={classes.courseList}>
                        <li>Full Stack Web Development (CPSC 322)</li>
                        <li>Linux and DevOps (CPSC 334)</li>
                        <li>Data Structures and Algorithms (CPSC 223)</li>
                        <li>Software Development (CPSC 224)</li>
                        <li>UI/UX Design (CPSC 331)</li>
                        <li>Operating Systems (CPSC 346)</li>
                        <li>Computer Organization (CPSC 260)</li>
                        <li>Game Theory and Applied Economics (ECON 303)</li>
                    </ul>
                </div>
                <div className={classes.section}>
                    <h2>Additional Coursework</h2>
                    <ul className={classes.courseList}>
                        <li>Regression Analysis (ECON 355)</li>
                        <li>Money and Banking (ECON 352)</li>
                        <li>Intermediate Macroeconomics (ECON 302)</li>
                        <li>Discrete Structures (MATH 231)</li>
                        <li>Statistics (MATH 321)</li>
                        <li>Calculus (MATH 157 - MATH 258 - MATH 259)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
