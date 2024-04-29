import React from 'react';
import './main-page.css';
import HomeSection from '../home-section/home-section.tsx';

const MainPage: React.FC = () => {
    return (
        <>
            <section>
                <HomeSection />
            </section>
            <section id='a-propos'>
                <h1>slide 2</h1>
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