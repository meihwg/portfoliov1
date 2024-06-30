import React from 'react';
import { Icon } from '@iconify/react';
import './home-section.css';
import DesignButton from '../design-button/design-button.tsx';

const HomeSection: React.FC = () => {
    return (
        <div className="homesection-container">
            <div className="home-banner">
                <h1>Laureen Belgrand</h1>
                <h2>Développeuse Full Stack</h2>
            </div>
            <div className="buttons-container">
                <DesignButton buttonLink='#a-propos' buttonText='A propos' buttonType='A' />
                <DesignButton buttonLink='#competences' buttonText='Compétences' buttonType='B' />
                <DesignButton buttonLink='#projets' buttonText='Projets' buttonType='C' />
                <DesignButton buttonLink='#parcours' buttonText='Parcours' buttonType='D' />
            </div>
            <nav className="home-nav">
                <ul className="home-icons">
                    <li title="mail : belgrandlaureen.tg2@gmail.com"><a href="mailto: belgrandlaureen.tg2@gmail.com"><Icon icon="material-symbols:mail" className="home-icon type--A" /></a></li>
                    <li title="tel : 0768735193"><Icon icon="ic:sharp-phone" className="home-icon type--B" /></li>
                    <li title="LinkedIn - Laureen Belgrand"><a href="https://www.linkedin.com/in/laureen-belgrand-313652208/" target="_blank" rel="noreferrer" className="home-icon type--C"><Icon icon="mdi:linkedin" /></a></li>
                    <li title="Github - Meihwg"><a href="https://www.github.com/meihwg" target="_blank" rel="noreferrer" className="home-icon type--D"><Icon icon="ant-design:github-filled" /></a></li>
                </ul>
            </nav>
        </div>

    );
}

export default HomeSection;