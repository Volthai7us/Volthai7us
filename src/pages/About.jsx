import React from 'react'
import '../stylesheets/About.css'
import myself from '../images/ben.png'
import resume from '../images/Resume.pdf'

export default function About() {
    return (
        <div className="About">
            <div className="AboutSection">
                <div className="AboutHeader">
                    <h1> I am Emir Soyturk </h1>
                </div>
                <div className="AboutBody">
                    <div className="AboutText">
                        <h1> About Me </h1>
                        <p>I am a full-stack and blockchain developer with a passion for programming. I am currently studying Computer Science at the TOBB ETU.</p>
                        <p>I am currently looking for a internship position for the Fall 2024 term. I am interested in full-stack development, blockchain, computer graphics.</p>
                    </div>
                    <div className="AboutImage">
                        <img src={myself} alt="About Me" width={'100%'} height={'100%'} />
                    </div>
                </div>
                <div className="AboutFooter">
                    <div className="ResumeGithub">
                        <a href="https://www.github.com/Volthai7us"> Github </a>
                        <a href={resume}> Resume </a>
                    </div>
                    <div className="ContactLinks">
                        <a href="https://www.linkedin.com/in/emir-soyturk/"> LinkedIn </a>
                        <a href="mailto:emirsytrk@gmail.com"> Email </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
