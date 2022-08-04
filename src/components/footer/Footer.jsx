import wave from '../../assets/wave.png'
import github from '../../assets/ghub.png'
import linkedin from '../../assets/lknd.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={wave} alt="footer"/>
            <div className="f-conteiner">
            <a href="mailto:enzodossantos364@gmail.com">enzodossantos364@gmail.com</a>
                <div className="f-imgs">
                    <a href="https://www.linkedin.com/in/enzods/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/enzodossantos"><img src={github} alt="github"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer