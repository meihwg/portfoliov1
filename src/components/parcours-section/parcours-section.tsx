import React from "react";
import { Icon } from '@iconify/react';
import "./parcours-section.css";

const ParcoursSection: React.FC = () => {
    return (
        <div className="parcours-section">
            <h2 className="parcours-title">Parcours</h2>
            <div className="timeline-container">
                <div className="timeline">
                    <div className="timeline-container type--C">
                        <div className="timeline-icons">
                            <Icon icon="ph:briefcase"  className="timeline-icon"/>
                        </div>
                        <div className="timeline-body">
                            <p className="timeline-title"><span className="badge">Branchet Solutions</span></p>
                            <p><b>Mars 2024 à Juillet 2024</b> - Stage développeuse Full-stack <br />
                            Développement et intégration à une application existante d'un processus complet</p>
                            <p className="timeline-subtitle">HTML, CSS, Python, Django, JavaScript, JQuery, PostgreSQL, Docker compose</p>
                        </div>
                    </div>
                    <div className="timeline-container type--B">
                        <div className="timeline-icons">
                            <Icon icon="ph:briefcase"  className="timeline-icon"/>
                        </div>
                        <div className="timeline-body">
                            <p className="timeline-title"><span className="badge">Laboratoire Informatique de Grenoble</span></p>
                            <p><b>Avril 2023 à Juillet 2023</b> - Stage visualisation de données <br />
                            Visualisation de distributions fortement inégales appliquées aux émissions CO2 du Laboratoire</p>
                            <p className="timeline-subtitle">HTML, JavaScript, D3.js</p>
                        </div>
                    </div>
                    <div className="timeline-container type--D">
                        <div className="timeline-icons">
                            <Icon icon="ph:books-light"  className="timeline-icon"/>
                        </div>
                        <div className="timeline-body">
                            <p className="timeline-title"><span className="badge">IUT2 de Grenoble</span></p>
                            <p><b>2024</b> - BUT Informatique <br />
                            parcours Développement d'applications</p>
                        </div>
                    </div>
                    <div className="timeline-container type--A">
                        <div className="timeline-icons">
                            <Icon icon="ph:books-light"  className="timeline-icon"/>
                        </div>
                        <div className="timeline-body">
                            <p className="timeline-title"><span className="badge">Lycée Portes de L'Oisans</span></p>
                            <p><b>2021</b> - Baccalauréat Général <br />
                            spécialités NSI et Arts Plastiques, option Mathématiques complémentaires</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParcoursSection;