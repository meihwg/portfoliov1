import React from "react";
import "./project-section.css";
import ProjectCard from "../project-card/project-card";

const ProjectSection: React.FC = () => {
    return (
        <div className="project-section">
            <h2 className="project-title">Projets</h2>
            <div className="project-cards">
                <ProjectCard
                    titre="Black Hole Bot - Jeu vidéo"
                    image="blackholebot"
                    tags= {["Jeu", "GameJam", "universitaire"]}
                    date="09/2023"
                    color="D"
                />
                <ProjectCard
                    titre="Intemporal - Site de vente aux enchères de montres"
                    image="intemporal"
                    tags= {["Web", "universitaire"]}
                    date="2023"
                    color="B"
                />
                <ProjectCard
                    titre="Chatjsuispt - Chatbot IA parodique"
                    image="chatjsuispt"
                    tags= {["Web", "personnel"]}
                    date="2023"
                    color="B"
                />
                <ProjectCard
                    titre="Hopack"
                    image="hopack"
                    tags= {["Logiciel", "universitaire"]}
                    date="2022"
                    color="A"
                />
                <ProjectCard
                    titre="Hardis Group - Site internet de présentation d'une ESN"
                    image="hardis"
                    tags= {["Web", "universitaire"]}
                    date="2021"
                    color="B"
                />
            </div>
        </div>
    );
}

export default ProjectSection;