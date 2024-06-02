import React from "react";
import { Icon } from '@iconify/react';
import "./skills-card.css";

interface SkillsCardProps {
    titre: string;
    competences: { [key: string]: number };
    color: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ titre, competences, color }) => {
    return (
        <div className={"skills-card type--" + color}>
            <div className="skills-container">
                <h4 className="skills-title">{titre}</h4>
                <div className="skills">
                    {Object.keys(competences).map((key) => {
                        return (
                            <div className="t-6">
                                <p>{key}<span></span><span className={"skills skill-" + competences[key]}></span></p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;