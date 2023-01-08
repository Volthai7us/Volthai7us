import React from 'react'
import '../App.css'
import { useState } from 'react'

export default function Welcome() {
    const [name, setName] = useState('')
    const [enter, setEnter] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            setName((prev) => {
                return prev.slice(0, -1)
            })
        } else if (event.key === 'Enter') {
            setEnter(true)
        } else if (event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {
        } else {
            setName((prev) => {
                if (name.length < 15) {
                    return prev + event.key
                }
                return prev
            })
        }
    }

    return (
        <div className={`Welcome`} tabIndex="0" onKeyDown={handleKeyDown}>
            <div className={`${enter ? ' slideUp' : ''}`}>
                <h1>
                    Welcome. Your name is {name}
                    {name.length < 15 && <span>_</span>}
                </h1>
                <span> Press ENTER</span>
            </div>

            <div className={`${enter ? ' slideDown' : ''}`}>
                <button> VIEW </button>
            </div>
        </div>
    )
}
