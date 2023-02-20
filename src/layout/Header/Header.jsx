import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/imgs/logo.png";
import "./style.scss";

function Navbar() {
    const navRef = useRef();

    const navs = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/services", name: "Services" },
        { path: "/resume", name: "Resume" },
        { path: "/portfolio", name: "Portfolio" },
        { path: "/contact", name: "Contact" }
    ];

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <div className="logo">
                        <a className="header__logo" href="">
                            <img src={logo} alt=""/>
                            <div className="d-flex flex-column"> <span className="logo__name">Abdulazizov </span> <span className="logo__name">Eshonqul</span></div>
                        </a>
                    </div>

                    <nav className="nav" ref={navRef}>
                        {navs.map(nav => (
                            <NavLink
                                onClick={() => showNavbar()}
                                className={({isActive}) =>
                                    isActive ? "nav__link active" : "nav__link"
                                }
                                to={nav.path}
                                key={nav.path}
                            >
                                {nav.name}
                            </NavLink>
                        ))}

                        <button className="nav__btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </nav>

                    <button className="nav__btn" onClick={showNavbar}>
                        <FaBars/>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
