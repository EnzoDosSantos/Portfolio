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
import './Technologies.css'

const Technologies = ({ innerRef }) => {
    return (
        <section ref={innerRef} className="title-skills">
            <div className="t-conteiner">
                <span>¿Con qué teconologias</span>
                <span>puedo trabajar?</span>

            </div>
            <div className="cards">
                <Js />
                <span>JAVASCRIPT</span>
                <Css />
                <span>CSS</span>
                <React />
                <span>REACT</span>
                <Html />
                <span>HTML</span>
                <Redux />
                <span>REDUX</span>
                <Postgres />
                <span>POSTGRESSQL</span>
                <MongoDB />
                <span>MONGODB</span>
                <Mongoose />
                <span>MONGOOSE</span>
                <Express />
                <span>EXPRESS</span>
                <Node />
                <span>NODEJS</span>
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
        </section>
    )
}

export default Technologies;