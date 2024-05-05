import React from "react";
import { Icon } from '@iconify/react';
import "./about-section.css";

const AboutSection: React.FC = () => {
    return (
        <section id='about'>
            <div className="about-left-container">
                <h2 className="about-title"><Icon icon="material-symbols-light:cloud-outline" /> A propos de moi <Icon icon="material-symbols-light:cloud-outline" /></h2>
                <div className="a-propos-texte">
                    <p>Je suis Laureen Belgrand, développeuse full stack. J'ai commencé à coder en 2020 et j'ai obtenu mon diplôme de développeuse web et web mobile en 2021. J'ai travaillé sur des projets personnels et professionnels, en utilisant des technologies telles que React, Node.js, Express.js, MongoDB, MySQL, et bien d'autres. 
                        Je suis Laureen Belgrand, développeuse full stack. J'ai commencé à coder en 2020 et j'ai obtenu mon diplôme de développeuse web et web mobile en 2021. J'ai travaillé sur des projets personnels et professionnels, en utilisant des technologies telles que React, Node.js, Express.js, MongoDB, MySQL, et bien d'autres. 
                        Je suis Laureen Belgrand, développeuse full stack. J'ai commencé à coder en 2020 et j'ai obtenu mon diplôme de développeuse web et web mobile en 2021. J'ai travaillé sur des projets personnels et professionnels, en utilisant des technologies telles que React, Node.js, Express.js, MongoDB, MySQL, et bien d'autres.
                    </p>
                </div>
            </div>
            <div className="about-right-container">
                <div className="a-propos-img"></div>
                <div className="a-propos-texte">
                    <p>Je suis passionnée par le développement web et mobile, et je suis toujours à la recherche de nouveaux projets à réaliser. J'aime travailler en équipe, apprendre de nouvelles choses, et partager mes connaissances avec les autres. Je suis également intéressée par le design, la photographie, et la musique.</p>
                </div>
                <div className="a-propos-texte">
                    <p>Je suis passionnée par le développement web et mobile, et je suis toujours à la recherche de nouveaux projets à réaliser. J'aime travailler en équipe, apprendre de nouvelles choses, et partager mes connaissances avec les autres. Je suis également intéressée par le design, la photographie, et la musique.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;