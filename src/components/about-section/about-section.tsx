import React from "react";
import { Icon } from '@iconify/react';
import "./about-section.css";

const AboutSection: React.FC = () => {
    return (
        <>
            <h2 className="about-title">A propos de moi</h2>
            <div id='about'>
                <div className="about-left-container">
                    <div className="a-propos-texte">
                        <h4>Qui suis-je ?</h4>
                        <p>Bientôt diplomée d'un <b>BUT Informatique</b>, parcours développement d'application, je pratique le développement depuis
                            presque six ans. J'ai découvert mon intérêt pour ce domaine pendant mes années lycée et depuis lors, j'ai pu acquérir de l'expérience professionnelle qui 
                            m'a permis de développer mes compétences. <br />
                            Par exemple, j'ai effectué un stage au Laboratoire Informatique de Grenoble (LIG) où j'ai travaillé sur de la 
                            visualisation de données en utilisant D3.js. J'ai également effectué un stage en développement Full Stack chez Branchet Solutions pendant lequel j'ai développé des fonctionnalités pour une 
                            application utilisant Django. Ces expériences m'ont permis de découvrir de nouvelles technologies et de perfectionner celles que je connaissais déjà.
                            <br /> <br />
                            Mes principales qualités sont ma capacité de réflexion, ma rigueur et la qualité de mon code, ainsi que ma capacité à m'adapter rapidement et à apprendre 
                            de nouvelles choses.
                            <br /><br />
                            Je me préoccupe peu des technologies, car je considère qu'elles ne sont que des outils. Cependant, j'ai une préférence pour le développement 
                            web et mobile, et mes langages de prédilection sont <b>JavaScript et Python</b>.
                        </p>
                    </div>
                    <img className="a-propos-img" src="/img/korovine.png" alt="" title="Constantin Korovine - " />
                    <div className="a-propos-texte">
                        <h4>Centres d'intérêts</h4>
                        <p>En dehors de l'informatique, j'aime créer des choses moi-même, j'aime dessiner et développer des choses. Je joue à 
                            quelques jeux vidéos tels que Genshin Impact ou Minecraft. Par ailleurs, j'ai un intérêt particulier pour l'art et son histoire, dans toutes ses 
                            formes, bien que je sois particulièrement attirée par la peinture et plus précisément le mouvement impressionniste. Vous pouvez d'ailleurs retrouver quelques
                            tableaux de Monet ou de Korovine, mes deux artistes préférés, sur cette page.
                        </p>
                    </div>
                </div>
                <div className="about-right-container">
                    <img className="a-propos-img" src="/img/claude-monet-the-magpie-winter-scene.jpg" alt="" title="Claude Monet - La pie" />
                    <div className="a-propos-texte">
                        <h4>Et ensuite ?</h4>
                        <p>Je suis actuellement à la recherche d'un premier emploi dans le domaine du développement. <br /> <br />
                            Je suis ouverte à toutes les opportunités, que ce soit en <b>développement web, mobile ou en développement logiciel</b>. Je suis cependant plus intéressée par
                            un poste de développeuse <b>Full Stack</b>, car j'aime travailler sur tous les aspects d'un projet et la diversité des tâches que cela implique. 
                        </p> 
                    </div>
                    <div className="a-propos-texte">
                        <h4>Me contacter</h4>
                        <p> Vous pouvez me contacter via les moyens suivants : <br /> <br />
                            <Icon icon="material-symbols:mail" /> : belgrandlaureen.tg2@gmail.com <br />
                            <Icon icon="ic:sharp-phone" /> : 0768735193 <br />
                            <Icon icon="mdi:linkedin" /> : <a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer">Laureen Belgrand</a> <br />
                            <Icon icon="ant-design:github-filled" /> : <a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer">meihwg</a>
                        </p>
                    </div>
                    <img className="a-propos-img" src="/img/korovine-winter-1894.png" alt="" title="Constantin Korovine - Hiver 1984" />
                </div>
            </div>
        </>
    );
}

export default AboutSection;