import React from 'react';
import './home-section.css';
import DesignButton from '../design-button/design-button.tsx';

const HomeSection: React.FC = () => {
    return (
        <>
            <div className="homesection-container">
                <h1>Laureen Belgrand</h1>
                <div className="buttons-container">
                    <DesignButton buttonLink='#a-propos' buttonText='A propos' buttonType='A' />
                    <DesignButton buttonLink='#competences' buttonText='Compétences' buttonType='B' />
                    <DesignButton buttonLink='#projets' buttonText='Projets' buttonType='C' />
                    <DesignButton buttonLink='#parcours' buttonText='Parcours' buttonType='D' />
                </div>
            </div>
            <div className="dark-overlay"></div>
            <div className="background"></div>
        </>
        
    );
}

export default HomeSection;