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
                                "JavaScript": 70,
                                "TypeScript, Angular, React": 70,
                                "PHP, Symfony": 40,
                                "Python, Django": 50,
                            }} />
                <SkillsCard titre="Langages applicatifs"
                            image="b"
                            cote="r"
                            competences={{ 
                                "Python": 70,
                                "Java": 50,
                                "C": 40,
                                "C++": 40,
                            }} />
                <SkillsCard titre="Bases de données" 
                            image="c"
                            cote="r"
                            competences={{ 
                                "PostgreSQL, MySQL, SQLite": 70,
                                "MongoDB": 60,
                                "Neo4j": 50,
                                "ElasticSearch": 50,
                                "Oracle": 40,
                            }} />
                <SkillsCard titre="Langues"
                            image="d"
                            cote="l"
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