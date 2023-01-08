import React from 'react'
import '../stylesheets/Works.css'
import nft_lending from '../images/lending.png'

export default function Works() {
    const [selectedField, setSelectedField] = React.useState('CG')

    const mouseMove = (e) => {
        var rect = e.target.parentElement.getBoundingClientRect()
        var y = e.clientY - rect.top
        const height = rect.height
        const percent = y / height
        const rect2 = document.getElementsByClassName('WorksContainer')[0].getBoundingClientRect()
        const height2 = rect2.height

        document.getElementsByClassName('Works')[0].style.setProperty('--shiftAmount', `${-percent * height2}px`)
    }

    const fieldMouseEnter = (field) => {
        setSelectedField(field)
    }

    const projects = [
        {
            title: 'Procedural Terrain Generation',
            type: 'Computer Graphics',
            field: 'CG',
            description: 'Procedural Terrain Generation is a project that generates a terrain recursively. It is built with OpenGL and C++.',
            github: 'https://github.com/Volthai7us/Procedural-Terrain',
            image: 'https://i.ibb.co/3mDXYq7/image.png',
        },
        {
            title: 'Mesh Viewer',
            type: 'Computer Graphics',
            field: 'CG',
            description: 'Simple Mesh Viewer for .off Files written with OpenGL',
            github: 'https://github.com/Volthai7us/MeshViewer',
            image: 'https://i.ibb.co/3mDXYq7/image.png',
        },
        {
            title: 'Nft Lending Platform',
            type: 'Blockchain Fullstack',
            field: 'B',
            description: 'Nft Lending Platform built on Polygon Blockchain with React, Solidity, Hardhat, Moralis',
            github: '',
            image: nft_lending,
        },
        {
            title: '',
            type: '',
            field: 'B',
            description: '',
            github: '',
            image: '',
        },
        {
            title: 'Hospital Management System',
            type: 'Fullstack',
            field: 'FS',
            description:
                'Hospital System is a web application that allows users to manage their patients and their medical records. It is built with React, Node.js, Express, MySQL.',
            github: 'https://github.com/Volthai7us/Hospital-System',
            image: 'https://i.ibb.co/3mDXYq7/image.png',
        },
        {
            title: '',
            type: '',
            field: 'FS',
            description: '',
            github: '',
            image: '',
        },
        {
            title: 'Maze',
            type: 'Java',
            field: 'J',
            description: 'The goal of this project is to create a fully connected map and find the desirable random point on the map starting from the center.',
            github: 'https://github.com/Volthai7us/Maze',
            image: 'https://i.ibb.co/3mDXYq7/image.png',
        },
        {
            title: 'Social Distance Simulation',
            type: 'Java',
            field: 'J',
            description: 'The goal of this project simulate a epidemic under various conditions.',
            github: 'https://github.com/Volthai7us/social-distancing-simulation',
            image: 'https://i.ibb.co/3mDXYq7/image.png',
        },
    ]

    return (
        <div className="Works">
            <div className="WorksSection">
                <div className="WorksHeader">
                    <h1> Works </h1>
                    <div className="Fields" onMouseMove={mouseMove}>
                        <span onMouseEnter={() => fieldMouseEnter('CG')}>Computer Graphics</span>
                        <span onMouseEnter={() => fieldMouseEnter('B')}>Blockchain</span>
                        <span onMouseEnter={() => fieldMouseEnter('FS')}>Fullstack</span>
                        <span onMouseEnter={() => fieldMouseEnter('J')}>Java</span>
                    </div>
                </div>
                <div className="WorksContainer">
                    {projects.map((project, index) => (
                        <div className={`WorksBody ${selectedField === project.field ? 'OnHover' : 'OffHover'}`} key={index}>
                            <div className="WorksText">
                                <h1> {project.title} </h1>
                                <p> {project.description} </p>
                                {project.github && <a href={project.github}> Visit Github</a>}
                                {project.github.length === 0 && project.image.length > 0 && <a href={project.image}> View Image </a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
