import React from "react";
import "./slide-navbar.css";
import { Icon } from '@iconify/react';

const SlideNavbar: React.FC = () => {

    const [navbarToggle, setNavbarToggle] = React.useState(true);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    function toggleNavbar() {
        if (screenWidth < 868) {
            setNavbarToggle(!navbarToggle);
        }
    }

    React.useEffect(() => {
        setScreenWidth(window.innerWidth);
        setNavbarToggle(window.innerWidth >= 868);
        
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
            setNavbarToggle(window.innerWidth >= 868);
        });
    }, []);

    return (
        <>
            <button className="navbar-toggle" id="navbar-toggle" onClick={toggleNavbar}>
                <Icon icon="iconamoon:menu-burger-horizontal-bold" />
            </button>
            {
                navbarToggle ?
                <nav className="navbar" onClick={toggleNavbar}>
                    {
                        screenWidth < 868 ? 
                        <div className="navbar-hide" onClick={toggleNavbar}></div> : null
                    }
                    <ul className="menu-hover-fill">
                        <li className="type--A"><a href="#accueil" data-text="Accueil" onClick={toggleNavbar}>Accueil</a></li>
                        <li className="type--B"><a href="#a-propos" data-text="A propos" onClick={toggleNavbar}>A propos</a></li>
                        <li className="type--C"><a href="#competences" data-text="Compétences" onClick={toggleNavbar}>Compétences</a></li>
                        <li className="type--D"><a href="#projets" data-text="Projets" onClick={toggleNavbar}>Projets</a></li>
                        <li className="type--E"><a href="#parcours" data-text="Parcours" onClick={toggleNavbar}>Parcours</a></li>
                    </ul>
                    <ul className="navbar-icons">
                        <li title="mail : belgrandlaureen.tg2@gmail.com"><a href="mailto: belgrandlaureen.tg2@gmail.com"><Icon icon="material-symbols:mail" className="navbar-icon type--B" /></a></li>
                        <li title="tel : 0768735193"><Icon icon="ic:sharp-phone" className="navbar-icon type--C" /></li>
                        <li title="LinkedIn - Laureen Belgrand"><a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer" className="navbar-icon type--D"><Icon icon="mdi:linkedin" /></a></li>
                        <li title="Github - meihwg"><a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer" className="navbar-icon type--E"><Icon icon="ant-design:github-filled" /></a></li>
                    </ul>
                </nav> : null
            }
            
        </>
    );
}

export default SlideNavbar;