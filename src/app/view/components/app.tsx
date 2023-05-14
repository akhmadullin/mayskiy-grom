import React, { FC } from 'react';
import Header from './header';
import Footer from './footer';
import IntroSection from './intro-section';
import GroupSection from './group-section';
import PersonalGroupABoys from './personal-competition-result/personal-group-a-boys';
import PersonalGroupAGirls from './personal-competition-result/personal-group-a-girls';
import TeamGroupA from './team-competition-result/team-group-a';
import PersonalGroupBBoys from './personal-competition-result/personal-group-b-boys';
import PersonalGroupBGirls from './personal-competition-result/personal-group-b-girls';
import TeamGroupB from './team-competition-result/team-group-b';
import PhotoGallerySection from './photo-gallery';
import HashScroller from './hash-scroller';

const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <GroupSection id="group-a" title="Группа A" description="Возраст участников 16-18 лет">
                    <PersonalGroupABoys />
                    <PersonalGroupAGirls />
                    <TeamGroupA />
                </GroupSection>
                <GroupSection id="group-b" title="Группа B" description="Возраст участников 14-16 лет">
                    <PersonalGroupBBoys />
                    <PersonalGroupBGirls />
                    <TeamGroupB />
                </GroupSection>
                <PhotoGallerySection id="photo-gallery" />
                <HashScroller />
            </main>
            <Footer />
        </>
    );
};

export default App;
