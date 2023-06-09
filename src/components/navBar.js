import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ blurValue, setblurValue, visible, setVisible }) => {

    const [visible2, setVisible2] = useState(true);
    const searchBarChange = () => {
        if (visible === false) {
            setVisible(true)
            setblurValue(10)
        }
    }

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

    const navLinkChange = () => {
        const navLinks = document.getElementsByClassName('nav-link');
        const navLinksArray = Array.from(navLinks);
        navLinksArray.forEach((navLink) => {
            navLink.classList.remove('active')
        });
    }

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded w-100 fixed-top z-3" style={{ filter: `blur(${blurValue}px)` }}>
            <div className="container-fluid">
                <button className="navbar-toggler" onClick={searchBtnHide} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link fw-bold active" to="/react_simple_ecommerce" onClick={navLinkChange} >Hot sales</Link>
                        <Link className="nav-link fw-bold" to='/electronics' onClick={navLinkChange} >Electronics</Link>
                        <Link className="nav-link fw-bold" to="/fashion" onClick={navLinkChange}>Fashion</Link>
                        <Link className="nav-link fw-bold" to="/foodsdrinks" onClick={navLinkChange}>Foods & Drinks</Link>
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