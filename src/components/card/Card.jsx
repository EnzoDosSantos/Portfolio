import './Card.css'

const Card = ({ img, title, detail, link }) => {
    return (
        <div className="card">
            <div className="c-wrapper">
            <img src={img} alt="img" />
            <span>{title}</span>
            <span>{detail}</span>
            <span>Repositorio:
                <a href={link}
                    target="_blank"
                >
                    <i className="fab fa-github">{link}</i>
                </a>
            </span>
            </div>
        </div>
    )
}

export default Card;