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
            </div>
        </section>
    )
}

export default Services;