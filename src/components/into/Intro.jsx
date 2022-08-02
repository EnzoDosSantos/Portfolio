import GitHub from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'
// import vector1 from '../../assets/vector1.png'
// import vector2 from '../../assets/vector2.png'
import me from '../../assets/yop.png'
import './Intro.css'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hola, yo soy</span>
                    <span>Enzo Dos Santos</span>
                    <span>Full Stack Developer y amante del Front End.
                         Si hay algo que me destaque es mi fuerte tendencia a seguir mejorando dia a dia para poder lograr mis objetivos
                         y dar lo mejor de mi en lo que me proponga.
                    </span>
                </div>
                <button className="button i-button">Contactame</button>
                <div className="i-icons">
                    <a href='https://github.com/EnzoDosSantos'>
                    <img src={GitHub} alt="github" />
                    </a>
                    <a href='https://www.linkedin.com/in/enzods/'>
                    <img src={LinkedIn} alt="linkedin" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                {/* <img src={vector1} alt="vector1" />
                <img src={vector2} alt="vector2" /> */}
                <img src={me} alt="me" />
            </div>
        </div>
    )
}

export default Intro;