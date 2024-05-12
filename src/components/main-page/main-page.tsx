import React from 'react';
import './main-page.css';
import SlideNavbar from '../slide-navbar/slide-navbar.tsx';
import HomeSection from '../home-section/home-section.tsx';
import AboutSection from '../about-section/about-section.tsx';
import CompetencesSection from '../competences-section/competences-section.tsx';
import ProjectSection from '../project-section/project-section.tsx';
import ParcoursSection from '../parcours-section/parcours-section.tsx';

const MainPage: React.FC = () => {
    return (
        <>
            <SlideNavbar />
            <section id='accueil'>
                <HomeSection />
            </section>
            <section id='a-propos'>
                <AboutSection />
            </section>
            <section id='competences'>
                <CompetencesSection />
            </section>
            <section id='projets'>
                <ProjectSection />
            </section>
            <section id='parcours'>
                <ParcoursSection />
            </section>
        </>
    );
}

export default MainPage;