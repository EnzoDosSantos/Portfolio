import { useEffect, useRef, useState } from 'react';
import BurguerButton from './BurguerButton';
import './NavBar.css'

const NavBar = ({ services, portfolio, contact, intro, technologies }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    const scrollToSeccion = (ref) => {
        if (ref === intro) {
            return window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: "smooth",
            })
        }
        return window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        })
    }

    const scrollBurguer = (ref) => {
        setClicked(false)
        if (ref === intro) {
            return window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: "smooth",
            })
        }
        return window.scrollTo({
            top: ref.current.offsetTop,
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
    }, [])

    const name = "</Enzo Dos Santos>"


    return (
        <nav ref={ref} className={isOpen ? "navbar active" : "navbar"}>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className={clicked ? "disabled" : "n-name"}>{name}</div>
                </div>
                <div className="n-right">
                    <div className="burger">
                        <BurguerButton clicked={clicked} handleClick={handleClick} />
                    </div>
                    <div className={`initial ${clicked ? 'activeBr' : ''}`}>
                        <ul>
                            <li onClick={() => scrollBurguer(ref)}>Home</li>
                            <li onClick={() => scrollBurguer(intro)}>Sobre mi</li>
                            <li onClick={() => scrollBurguer(services)}>Habilidades</li>
                            <li onClick={() => scrollBurguer(portfolio)}>Proyectos</li>
                            <li onClick={() => scrollBurguer(contact)}>Contacto</li>
                        </ul>
                    </div>
                    <div className="n-list">
                        <ul>
                            <li onClick={() => scrollToSeccion(ref)}>Home</li>
                            <li onClick={() => scrollToSeccion(intro)}>Sobre mi</li>
                            <li onClick={() => scrollToSeccion(services)}>Habilidades</li>
                            <li onClick={() => scrollToSeccion(portfolio)}>Proyectos</li>
                        </ul>
                    </div>
                    <button onClick={() => scrollToSeccion(contact)} className='n-button'>
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
