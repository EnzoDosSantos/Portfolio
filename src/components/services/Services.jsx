import Postgres from '../../assets/svg/postgres'
import Mongoose from '../../assets/svg/mongoose'
import MongoDB from '../../assets/svg/mongodb'
import Express from '../../assets/svg/express'
import Node from '../../assets/svg/node'
import Redux from '../../assets/svg/redux'
import React from '../../assets/svg/react'
import Css from '../../assets/svg/css'
import Html from '../../assets/svg/html'
import Js from '../../assets/svg/js'
import cv from '../../assets/data/EnzoDosSantosCV.pdf'
import './Services.css'

const Services = ({ innerRef }) => {
    return (
        <section ref={innerRef} className="services">
            <div className="awesome">
                <span>Mis conocimientos</span>
                <span>actuales</span>
                <span>
                    En esta sección podrás encontrar una lista de los conocimientos que tengo hasta el momento y tambien tendras acceso
                </span>
                <span>
                    a mi curriculum actualizado.
                </span>
                <a href={cv} download>
                    <button className="button s-button">Descargar CV</button>
                </a>
                {/* <div className="blurs-blurl" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
            <div className="title-skills">
                <span>¿Con qué herramientas puedo</span>
                <span>trabajar?</span>
                <div className="cards">
                    <Postgres />
                    <span>POSTGRESSQL</span>
                    <Mongoose />
                    <span>MONGOOSE</span>
                    <MongoDB />
                    <span>MONGODB</span>
                    <Express />
                    <span>EXPRESS</span>
                    <Node />
                    <span>NODEJS</span>
                    <Redux />
                    <span>REDUX</span>
                    <React />
                    <span>REACT</span>
                    <Css />
                    <span>CSS</span>
                    <Html />
                    <span>HTML</span>
                    <Js />
                    <span>JAVASCRIPT</span>
                </div>
                <div className="c-res">
                    <div className="c-c">
                        <Postgres />
                        <span>POSTGRESSQL</span>
                    </div>
                    <div className="c-c">
                        <Mongoose />
                        <span>MONGOOSE</span>
                    </div>
                    <div className="c-c">
                        <Mongoose />
                        <span>MONGOOSE</span>
                    </div>
                    <div className="c-c">
                        <Express />
                        <span>EXPRESS</span>
                    </div>
                    <div className="c-c">
                        <Node />
                        <span>NODEJS</span>
                    </div>
                    <div className="c-c">
                        <Redux />
                        <span>REDUX</span>
                    </div>
                    <div className="c-c">
                        <React />
                        <span>REACT</span>
                    </div>
                    <div className="c-c">
                        <Css />
                        <span>CSS</span>
                    </div>
                    <div className="c-c">
                        <Html />
                        <span>HTML</span>
                    </div>
                    <div className="c-c">
                        <Js />
                        <span>JAVASCRIPT</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;