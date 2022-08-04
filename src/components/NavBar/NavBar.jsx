import { useEffect, useRef, useState } from 'react';
import './NavBar.css'

const NavBar = ({ services, portfolio, contact, intro }) => {
    const [isOpen, setIsOpen] = useState(false)
    const home = useRef(null)
    const ref = useRef(null)

    const scrollToSeccion = (ref) => {
        if(ref === home) {
            return window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        if(ref === intro){
            return window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: "smooth",
            })
        }
        return window.scrollTo({
            top: ref.current.offsetTop + 90,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const changeNavbarState = () => {
            if (Number(window.scrollY) >= 70) {
                return setIsOpen(true)
            }
            return setIsOpen(false)
        }
        window.addEventListener('scroll', changeNavbarState)
    } , [])
    
    const name = "</Enzo Dos Santos>"


    return (
        <nav ref={ref} className={isOpen ? "navbar active" : "navbar"}>
            <div className='n-wrapper'>
                <div className="n-left">
                    <div className="n-name">{name}</div>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul>
                            <li onClick={() => scrollToSeccion(home)}>Home</li>
                            <li onClick={() => scrollToSeccion(intro)}>Sobre mi</li>
                            <li onClick={() => scrollToSeccion(services)}>Habilidades</li>
                            <li onClick={() => scrollToSeccion(portfolio)}>Proyectos</li>
                        </ul>
                    </div>
                    <button onClick={() => scrollToSeccion(contact)}  className='n-button'>
                        <div className='svg-wrapper-1'>
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Contactame</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
