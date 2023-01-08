import React from 'react'
import '../stylesheets/Slide.css'
import '../stylesheets/Intro.css'

import About from './About'
import Works from './Works'
import Blog from './Blog'

export default function Slide() {
    const [slide, setSlide] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const keydownHandler = (e) => {
        if (e.key === 'Enter') {
            setSlide(true)
            console.log('Enter key pressed')
        }
    }

    const pressClick = (e) => {
        setSlide(true)
    }

    const clickHandler = (id) => {
        setSelected(id)
    }

    return (
        <div className="Slide" tabIndex={0} onKeyDown={keydownHandler} onClick={pressClick}>
            <div className={`SlideSection ${slide ? 'Effect' : ''}`}>
                <span className="ButtonText"> Click </span>
            </div>
            <div className={`SlideSection ${slide ? 'Effect' : ''}`}>
                <span className="ButtonText"> Click </span>
            </div>
            <div className={`Intro ${selected !== 0 ? 'Menu' : ''}`}>
                <div
                    onClick={() => clickHandler(3)}
                    className={`IntroChild ${slide && selected === 0 ? 'Item' : selected === 0 ? '' : selected === 3 ? 'Main' : selected === 2 ? 'Side1' : 'Side2'}`}
                >
                    {selected === 3 ? (
                        <About />
                    ) : (
                        <div className="LetterContainer">
                            {'ABOUTME'.split('').map((letter, index) => {
                                return <a key={index}> {letter} </a>
                            })}
                        </div>
                    )}
                </div>
                <div
                    onClick={() => clickHandler(1)}
                    className={`IntroChild ${slide && selected === 0 ? 'Item' : selected === 0 ? '' : selected === 1 ? 'Main' : selected === 3 ? 'Side1' : 'Side2'}`}
                >
                    {selected === 1 ? (
                        <Blog />
                    ) : (
                        <div className="LetterContainer">
                            {'BLOG'.split('').map((letter, index) => {
                                return <a key={index}> {letter} </a>
                            })}
                        </div>
                    )}
                </div>
                <div
                    onClick={() => clickHandler(2)}
                    className={`IntroChild ${slide && selected === 0 ? 'Item' : selected === 0 ? '' : selected === 2 ? 'Main' : selected === 1 ? 'Side1' : 'Side2'}`}
                >
                    {selected === 2 ? (
                        <Works />
                    ) : (
                        <div className="LetterContainer">
                            {'WORKS'.split('').map((letter, index) => {
                                return <a key={index}> {letter} </a>
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
