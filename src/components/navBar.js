import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = ({ blurValue, setblurValue, visible, setVisible, setSearchKey, setFoundItems }) => {

    const [visible2, setVisible2] = useState(true);
    const searchBarChange = () => {
        if (visible === false) {
            setVisible(true)
            setblurValue(10)
            setSearchKey('')
            setFoundItems([])
        }
    }

    const location = useLocation();

    const searchBtnHide = () => {
        if (visible2) {
            setVisible2(false)
        }
        else {
            setTimeout(() => {
                setVisible2(true)
            }, 400);
        }

    }

    const navLinkChange = (event) => {
        const navLinks = document.getElementsByClassName('nav-link');
        const navLinksArray = Array.from(navLinks);
        navLinksArray.forEach((navLink) => {
            navLink.classList.remove('active')
        });
        event.target.classList.add('active');
        if (window.innerWidth <= 991) {
            document.getElementById("navbar-toggler").click()
        }

    }

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded w-100 fixed-top z-3" style={{ filter: `blur(${blurValue}px)` }}>
            <div className="container-fluid">
                <button className="navbar-toggler" id="navbar-toggler" onClick={searchBtnHide} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link fw-bold ${location.pathname === '/react_simple_ecommerce' ? 'active' : ''}`} to="/react_simple_ecommerce" onClick={navLinkChange} >Hot sales</Link>
                        <Link className={`nav-link fw-bold ${location.pathname === '/aboutus' ? 'active' : ''}`} to='/aboutus' onClick={navLinkChange} >About Us</Link>
                        <Link className={`nav-link fw-bold ${location.pathname === '/joinus' ? 'active' : ''}`} to="/joinus" onClick={navLinkChange}>Join Us</Link>
                        <Link className={`nav-link fw-bold ${location.pathname === '/account' ? 'active' : ''}`} to="/account" onClick={navLinkChange}>Account
                            <i className="fa-solid fa-user fs-5 ms-1"></i>
                        </Link>
                    </div>
                </div>

                {visible2 && (
                    <button className=" border-0 fs-3" onClick={searchBarChange}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                )}
            </div>
        </nav >
    </>
}

export default NavBar