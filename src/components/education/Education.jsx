import React from "react";
import classes from "./education.module.css";
import image from "../../images/university-logo.jpeg";

const Education = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.school}>
                    <img src={image} alt="gonzaga university" />
                    <div className={classes.nameAndInformation}>
                        <span>Gonzaga University</span>
                        <br />
                        <span>B.A. Computer Science, Economics</span>
                        <br />
                        <span>Expected Graduation: May 2026</span>
                    </div>
                </div>
                <div className={classes.coursework}>
                    <div className={classes.relevantCoursework}>
                        <h2>Relevant Coursework</h2>
                        <ul>
                            <li>Full Stack Web Development (CPSC 322)</li>
                            <li>Linux and DevOps (CPSC 334)</li>
                            <li>Data Structures and Algorithms (CPSC 223)</li>
                            <li>Software Development (CPSC 224)</li>
                            <li>UI/UX Design (CPSC 331)</li>
                            <li>Operating Systems (CPSC 346)</li>
                            <li>Computer Organization (CPSC 260)</li>
                            <li>
                                Game Theory and Applied Economics (ECON 303)
                            </li>
                        </ul>
                    </div>
                    <div className={classes.additionalCoursework}>
                        <h2>Additional Coursework</h2>
                        <ul>
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
        </>
    );
};

export default Education;
