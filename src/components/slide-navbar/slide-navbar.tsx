import React from "react";
import "./slide-navbar.css";
import { Icon } from '@iconify/react';

const SlideNavbar: React.FC = () => {

    return (
        <nav className="navbar">
            <ul className="menu-hover-fill">
                <li className="type--A"><a href="#accueil" data-text="Accueil">Accueil</a></li>
                <li className="type--B"><a href="#a-propos" data-text="A propos">A propos</a></li>
                <li className="type--C"><a href="#competences" data-text="Compétences">Compétences</a></li>
                <li className="type--D"><a href="#projets" data-text="Projets">Projets</a></li>
                <li className="type--E"><a href="#parcours" data-text="Parcours">Parcours</a></li>
            </ul>
            <ul className="navbar-icons">
                <li title="mail : belgrandlaureen.tg2@gmail.com"><a href="mailto: belgrandlaureen.tg2@gmail.com"><Icon icon="material-symbols:mail" className="navbar-icon" /></a></li>
                <li title="tel : 0768735193"><Icon icon="ic:sharp-phone" className="navbar-icon" /></li>
                <li title="LinkedIn - Laureen Belgrand"><a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer" className="navbar-icon"><Icon icon="mdi:linkedin" /></a></li>
                <li title="Github - Meihwg"><a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer" className="navbar-icon"><Icon icon="ant-design:github-filled" /></a></li>
            </ul>
        </nav>
    );
}

export default SlideNavbar;