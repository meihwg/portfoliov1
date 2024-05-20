import React from "react";
import { Icon } from '@iconify/react';
import "./competences-section.css";

import SkillsCard from "../skills-card/skills-card";

const CompetencesSection: React.FC = () => {
    return (
        <section id='competences-section'>
            <h2 className="competences-title">Compétences</h2>
            <div className="comp-container">
                <SkillsCard titre="Langages Web"
                            image="a"
                            cote="l"
                            competences={{ 
                                "HTML, CSS": 80,
                                "JavaScript": 90,
                                "TypeScript, Angular, React": 80,
                                "PHP, Symfony": 40,
                                "Python, Django": 50,
                            }} />
                <SkillsCard titre="Langages applicatifs"
                            image="b"
                            cote="r"
                            competences={{ 
                                "Python": 80,
                                "Java": 60,
                                "C": 40,
                                "C++": 40,
                                "Flutter": 50,
                            }} />
                <SkillsCard titre="Bases de données" 
                            image="c"
                            cote="r"
                            competences={{ 
                                "PostgreSQL, MySQL, SQLite": 90,
                                "MongoDB": 60,
                                "Neo4j": 50,
                                "ElasticSearch": 50,
                                "Oracle": 40,
                            }} />
                <SkillsCard titre="Générales"
                            image="d"
                            cote="l"
                            competences={{
                                "Développement Web": 80,
                                "Développement Mobile": 60,
                                "Développement Logiciel": 70,
                                "Base de données": 90,
                            }} />
                <SkillsCard titre="Outils"
                            image="e"
                            cote="l"
                            competences={{
                                "Visual Studio Code, IntelliJ": 90,
                                "Git": 60,
                                "Docker": 40,
                                "Jira, Trello": 50,
                                "Figma": 80,
                            }} />
                <SkillsCard titre="Langues"
                            image="f"
                            cote="r"
                            competences={{
                                "Français - Courant": 100,
                                "Anglais - C1": 80,
                                "Espagnol - B1": 50,
                            }} />
            </div>
        </section>
    );
}

export default CompetencesSection;