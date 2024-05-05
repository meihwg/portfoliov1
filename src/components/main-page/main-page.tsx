import React from 'react';
import './main-page.css';
import SlideNavbar from '../slide-navbar/slide-navbar.tsx';
import HomeSection from '../home-section/home-section.tsx';
import AboutSection from '../about-section/about-section.tsx';

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
                <h1>slide 3</h1>
            </section>
            <section id='projets'>
                <h1>slide 4</h1>
            </section>
            <section id='parcours'>
                <h1>slide 5</h1>
            </section>
        </>
    );
}

export default MainPage;