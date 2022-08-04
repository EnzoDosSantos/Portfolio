import GitHub from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'
import me from '../../assets/yop.png'
import './Intro.css'

const Intro = ({ innerRef }) => {
    return (
        <section ref={innerRef} className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hola, yo soy</span>
                    <span>Enzo Dos Santos</span>
                    <span>Full Stack Developer y amante del Front End.
                         Si hay algo que me destaque es mi fuerte tendencia a seguir mejorando dia a dia para poder lograr mis objetivos
                         y dar lo mejor de mi en lo que me proponga.
                    </span>
                </div>
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
                <img src={me} alt="me" />
            </div>
        </section>
    )
}

export default Intro;