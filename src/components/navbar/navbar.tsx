import React from "react";
import "./navbar.css";
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {

    return (
        <nav className="navbar">
            <ul className="navbar_menu">
                <li className="navbar_item"><a href="#accueil" className="navbar_link"> <Icon icon="ri:home-heart-fill" /> <p className="navbar_title">Accueil</p></a></li>
                <li className="navbar_item"><a href="#a-propos" className="navbar_link"> <Icon icon="mdi:card-account-details" /> <p className="navbar_title">A propos</p></a></li>
                <li className="navbar_item"><a href="#competences" className="navbar_link"> <Icon icon="pepicons-pop:cv" /> <p className="navbar_title">Compétences</p></a></li>
                <li className="navbar_item"><a href="#projets" className="navbar_link"> <Icon icon="lets-icons:folders-line" /> <p className="navbar_title">Projets</p></a></li>
                <li className="navbar_item"><a href="#parcours" className="navbar_link"> <Icon icon="ph:path-bold" /> <p className="navbar_title">Parcours</p></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;