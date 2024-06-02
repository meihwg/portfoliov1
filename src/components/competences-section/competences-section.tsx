import React from "react";
import { Icon } from '@iconify/react';
import "./competences-section.css";

import SkillsCard from "../skills-card/skills-card";

const CompetencesSection: React.FC = () => {
    return (
        <section id='competences-section'>
            <h2 className="competences-title">Compétences</h2>
            <div className="comp-container">
                <div className="row">
                    <SkillsCard titre="Langages Web"
                        color="B"
                        competences={{
                            "HTML, CSS": 80,
                            "JavaScript": 90,
                            "TypeScript, Angular, React": 80,
                            "PHP, Symfony": 40,
                            "Python, Django": 50,
                        }} />
                    <SkillsCard titre="Langages applicatifs"
                        color="D"
                        competences={{
                            "Python": 80,
                            "Java": 60,
                            "C": 40,
                            "C++": 40,
                            "Flutter": 50,
                        }} />
                </div>
                <div className="row">
                    <SkillsCard titre="Bases de données"
                        color="A"
                        competences={{
                            "PostgreSQL, MySQL, SQLite": 90,
                            "MongoDB": 60,
                            "Neo4j": 50,
                            "ElasticSearch": 50,
                            "Oracle": 40,
                        }} />
                    <SkillsCard titre="Langues"
                        color="C"
                        competences={{
                            "Français - Courant": 100,
                            "Anglais - C1": 80,
                            "Espagnol - B1": 50,
                        }} />
                </div>
            </div>
        </section>
    );
}

export default CompetencesSection;