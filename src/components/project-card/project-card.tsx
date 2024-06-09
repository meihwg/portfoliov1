import React from "react";
import "./project-card.css";

interface ProjectCardProps {
    titre: string;
    image: string;
    tags: string[];
    date: string;
    color: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ titre, image, tags, date, color, description }) => {

    const [popup, setPopup] = React.useState(false);

    function togglePopup() {
        setPopup(!popup);
    }

    return (
        <>
            <div className={"card type--" + color + " card-" + image} onClick={togglePopup}>
                <div className="card-img"></div>
                <a className="card-link">
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
            {
                popup ?
                    <div className="popup-bg" onClick={togglePopup}>
                        <div className={"project-popup type--" + color + " card-" + image}>
                            <div className="popup-header">
                                <div className="popup-space"></div>
                                <h4 className="card-title">{titre}</h4>
                                <div className="popup-close" onClick={togglePopup}>x</div>
                            </div>
                            <div className="popup-body">
                                    <div className="card-img popup-img"></div>
                                    <div className="popup-text">
                                        <div className="popup-cont">
                                            <div className="popup-tags">
                                                {tags.map((tag) => {
                                                    return (
                                                        <a className="card-tag">{tag}</a>
                                                    );
                                                })}
                                            </div>
                                            <div className="popup-date">{date}</div>
                                        </div>
                                        <div className="popup-desc">
                                            <p>
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    );
}

export default ProjectCard;