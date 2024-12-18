import React from "react";
import classes from "./console.module.css";

const Console = () => {
    return (
        <div className={classes.console}>
            <span className={classes.firstColor}>package </span>
            <span className={classes.fifthColor}>aboutMe</span>
            <span className={classes.secondColor}>;</span>
            <br />
            <br />
            <span className={classes.firstColor}>public </span>
            <span className={classes.thirdColor}>class </span>
            <span className={classes.fifthColor}>David </span>
            <span className={classes.firstColor}>extends </span>
            <span className={classes.fifthColor}>Human</span>
            <span className={classes.secondColor}> {"{"}</span>
            <br />
            &nbsp;&nbsp;<span className={classes.firstColor}>public </span>
            <span className={classes.fifthColor}>David</span>
            <span className={classes.secondColor}>() {"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>String </span>
            <span className={classes.secondColor}>fullName = </span>
            <span className={classes.fourthColor}>"David Sosa"</span>
            <span className={classes.secondColor}>;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>String </span>
            <span className={classes.secondColor}>homeTown = </span>
            <span className={classes.fourthColor}>"East Wenatchee, WA"</span>
            <span className={classes.secondColor}>;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>String </span>
            <span className={classes.secondColor}>school = </span>
            <span className={classes.fourthColor}>"Gonzaga University"</span>
            <span className={classes.secondColor}>;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>int </span>
            <span className={classes.secondColor}>expGraduation = </span>
            <span className={classes.fourthColor}>2026</span>
            <span className={classes.secondColor}>;</span>
            <br />
            &nbsp;&nbsp;<span className={classes.secondColor}>{"}"}</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className={classes.thirdColor}>String </span>
            <span className={classes.secondColor}>major = </span>
            <span className={classes.fourthColor}>
                "Computer Science and Econ"
            </span>
            <span className={classes.secondColor}>;</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className={classes.thirdColor}>Resume </span>
            <span className={classes.secondColor}>resume = </span>
            <span className={classes.firstColor}>new </span>
            <span className={classes.secondColor}>Resume(</span>
            <span className={classes.fourthColor}>"</span>
            <a
                href="assets/ChristineNguyenResume.pdf"
                className={classes.fourthColor}
            >
                pdf
            </a>
            <span className={classes.fourthColor}>"</span>
            <span className={classes.secondColor}>)</span>
            <span className={classes.secondColor}>;</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className={classes.thirdColor}>String[] </span>
            <span className={classes.secondColor}>hobbiesAndInterests = </span>
            <span className={classes.firstColor}>new </span>
            <span className={classes.thirdColor}>String[]</span>
            <span className={classes.secondColor}>{"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"weight lifting"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"running"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"traveling"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"concerts"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"poker"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"board games"</span>
            <br />
            &nbsp;&nbsp;<span className={classes.secondColor}>{"}"}</span>
            <br />
            <br />
            &nbsp;&nbsp;
            <span className={classes.firstColor}>public static </span>
            <span className={classes.thirdColor}>void </span>
            <span className={classes.fifthColor}>contact</span>
            <span className={classes.secondColor}>() {"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>Email </span>
            <span className={classes.secondColor}>email = </span>
            <span className={classes.firstColor}>new </span>
            <span className={classes.secondColor}>Email(</span>
            <span className={classes.fourthColor}>"</span>
            <a
                href="mailto:davidgsosa1@gmail.com"
                className={classes.fourthColor}
            >
                davidgsosa1@gmail.com
            </a>
            <span className={classes.fourthColor}>"</span>
            <span className={classes.secondColor}>)</span>
            <span className={classes.secondColor}>;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.thirdColor}>String[] </span>
            <span className={classes.secondColor}>links = </span>
            <span className={classes.firstColor}>new </span>
            <span className={classes.thirdColor}>String[]</span>
            <span className={classes.secondColor}>{"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"</span>
            <a
                href="www.linkedin.com/in/davidgsosa"
                className={classes.fourthColor}
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            <span className={classes.fourthColor}>"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"</span>
            <a
                href="https://github.com/davidg7672"
                className={classes.fourthColor}
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>
            <span className={classes.fourthColor}>"</span>
            <span className={classes.secondColor}>,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.fourthColor}>"</span>
            <a
                href="https://www.instagram.com/davidsossaa/profilecard/?igsh=dDRkdXNpZmRoazNv"
                className={classes.fourthColor}
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
            <span className={classes.fourthColor}>"</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={classes.secondColor}>{"}"}</span>
            <br />
            &nbsp;&nbsp;<span className={classes.secondColor}>{"}"}</span>
            <br />
            <span className={classes.secondColor}>{"}"}</span>
        </div>
    );
};

export default Console;
