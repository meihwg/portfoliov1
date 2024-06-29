import React from "react";
import "./project-card.css";

interface ProjectCardProps {
    titre: string;
    images: string[];
    tags: string[];
    date: string;
    color: string;
    description: string;
    keywords: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ titre, images, tags, date, color, description, keywords }) => {

    const [popup, setPopup] = React.useState(false);

    function togglePopup() {
        setPopup(!popup);
    }

    return (
        <>
            <div className={"card type--" + color + " card-" + images[0]} onClick={togglePopup}>
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
                    <div className="popup-bg">
                        <div className={"project-popup type--" + color + " card-" + images[0]}>
                            <div className="popup-header">
                                <div className="popup-space"></div>
                                <h4 className="card-title">{titre}</h4>
                                <div className="popup-close" onClick={togglePopup}>x</div>
                            </div>
                            <div className="popup-body">
                                    <img className="popup-img" src={"/img/projets/"+ images[0] +".png"}/>
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
                                                <div dangerouslySetInnerHTML={{ __html: description }} />
                                            </p>
                                            <div className="popup-images">
                                                {images.map((image) => {
                                                    // toutes les images sauf la première
                                                    if (image !== images[0]) {
                                                        return (
                                                            <img className="popup-img" src={"/img/projets/"+ image +".png"}/>
                                                        );
                                                    }
                                                })}
                                            </div>
                                            <div className="popup-keywords">
                                                {keywords.map((keyword) => {
                                                    return (
                                                        <a className="popup-keyword">{keyword}</a>
                                                    );
                                                })}
                                            </div>
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