import React from "react";
import "./project-card.css";

interface ProjectCardProps {
    titre: string;
    image: string;
    tags: string[];
    date: string;
    color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ titre, image, tags, date, color }) => {
    return (
        <div className={"card type--" + color + " card-" + image}>
            <div className="card-img"></div>
            <a href="" className="card-link">
                <div className="card-img-hovered"></div>
            </a>
            <div className="card-info">
                <div className="card-about">
                    <div className="card-tags">
                        {tags.map((tag) => {
                            return (
                                <a className="card-tag">{tag}</a>
                            );
                        })}
                    </div>
                    <div className="card-time">{date}</div>
                </div>
                <h4 className="card-title">{titre}</h4>
            </div>
        </div>
    );
}

export default ProjectCard;