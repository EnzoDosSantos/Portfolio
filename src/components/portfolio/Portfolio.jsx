import Card from '../card/Card'
import sm from '../../assets/Script_Music.png'
import pi from '../../assets/App_Gamery.png'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Mis Proyectos</span>
            <span>recientes</span>
            <div className="p-items">
                <Card
                img={sm}
                title={"Script Music"}
                detail={"Aplicación mobile nativa de venta de instrumentos con panel de administrador en formato web."}
                link={"https://github.com/JaluGJ/ScriptMusic"}
                />
                <Card
                img={pi}
                title={"APP GAMERY"}
                detail={"Aplicación web que permite crear juegos nuevos, ver informacón, filtrar y ordenar de más de 100 juegos."}
                link={"https://github.com/EnzoDosSantos/PI-VideoGames"}
                />
            </div>
        </div>
    )
}

export default Portfolio;
