import './Card.css'

const Card = ({ img, title, detail, link }) => {
    return (
        <div className="card">
            <div className="c-wrapper">
            <img src={img} alt="img" />
            <span>{title}</span>
            <span>{detail} </span>
            <div className="c-conteiner-data">
            <span>Repositorio:
                <a href={link}
                    target="_blank"
                >
                    <span>{link}</span>
                </a>
            </span>
            </div>
            </div>
        </div>
    )
}

export default Card;