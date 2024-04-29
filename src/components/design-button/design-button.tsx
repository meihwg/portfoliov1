import React from "react";
import "./design-button.css";

interface DesignButtonProps {
    buttonText: string;
    buttonLink: string;
    buttonType: string;
}

const DesignButton: React.FC<DesignButtonProps> = ({buttonText, buttonLink, buttonType}) => {
    return (
        <a href={buttonLink} className={"button type--" + buttonType}>
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">{buttonText}</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
        </a>
    );
}

export default DesignButton;