import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='n-wrapper'>
                <div className="n-left">
                    <div className="n-name">EnzoDS</div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul>
                            {/* <a href="#Home"> */}
                            <li>Home</li>
                            {/* </a> */}
                            {/* <a href="#About"> */}
                            <li>Sobre mi</li>
                            {/* </a> */}
                            {/* <a href="#Skills"> */}
                            <li>Habilidades</li>
                            {/* </a> */}
                            {/* <a href="#Proyects"> */}
                            <li>Proyectos</li>
                            {/* </a> */}
                        </ul>
                    </div>
                    <button className='n-button'>
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
        </div>
    );
}

export default NavBar;
