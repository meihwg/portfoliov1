import React from "react";
import { Icon } from '@iconify/react';
import "./about-section.css";

const AboutSection: React.FC = () => {
    return (
        <section id='about'>
            <div className="about-left-container">
                <h2 className="about-title"><Icon icon="material-symbols-light:cloud-outline" /> A propos de moi <Icon icon="material-symbols-light:cloud-outline" /></h2>
                <div className="a-propos-texte">
                    <p>Actuellement étudiante en 3ème année de BUT Informatique, parcours développement d'application, à l'IUT2 de Grenoble, je pratique le développement depuis
                        presque six ans. J'ai découvert mon intérêt pour ce domaine pendant mes années lycée et depuis lors, j'ai pu acquérir de l'expérience professionnelle qui 
                        m'a permis de développer mes compétences. Par exemple, j'ai effectué un stage au Laboratoire Informatique de Grenoble (LIG) où j'ai travaillé sur la 
                        visualisation de données en utilisant D3.js. J'ai également effectué un stage chez Branchet Solutions où j'ai développé des fonctionnalités pour une 
                        application utilisant Django. Ces expériences m'ont permis de découvrir de nouvelles technologies et de perfectionner celles que je connaissais déjà.
                        <br /> <br />
                        Mes principales qualités sont ma capacité de réflexion, ma rigueur et la qualité de mon code, ainsi que ma capacité à m'adapter rapidement et à apprendre 
                        de nouvelles choses.
                        <br /><br />
                        Je me préoccupe peu des technologies, car je considère qu'elles ne sont que des outils. Cependant, j'ai une préférence pour le développement 
                        web et mobile, et mes langages de prédilection sont JavaScript et Python.
                    </p>
                </div>
            </div>
            <div className="about-right-container">
                <div className="a-propos-img"></div>
                <div className="a-propos-texte">
                    <p>En dehors de l'informatique, j'aime créer des choses moi-même, j'aime dessiner, écrire et personnaliser mes personnages dans des jeux vidéos. Je joue à 
                        quelques jeux tels que Genshin Impact, Minecraft ou Animal Crossing. Par ailleurs, j'ai un intérêt particulier pour l'art et son histoire, dans toutes ses 
                        formes, bien que je sois particulièrement attirée par la peinture. Vous remarquerez d'ailleurs quelques tableaux présents sur cette page, la plupart étant 
                        des œuvres de Claude Monet ou de Konstantin Korovin.
                    </p>
                </div>
                <div className="a-propos-texte">
                    <p> Vous pouvez me contacter par ces moyens : <br />
                        <Icon icon="material-symbols:mail" /> : belgrandlaureen.tg2@gmail.com <br />
                        <Icon icon="ic:sharp-phone" /> : 0768735193 <br />
                        <Icon icon="mdi:linkedin" /> : <a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer">Laureen Belgrand</a> <br />
                        <Icon icon="ant-design:github-filled" /> : <a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer">meihwg</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;