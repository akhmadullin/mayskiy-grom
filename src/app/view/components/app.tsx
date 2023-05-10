import React, { FC, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import IntroSection from './intro-section';
import PersonalGroupABoys from './personal-group-a-boys';
import TeamGroupA from './team-group-a';

import { RersonalCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/personal-competition-result-loader-from-google-sheets';
import { TeamCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/team-competition-result-loader-from-google-sheets';
import { PersonalCompetitionType, TeamCompetitionType } from '../../domain/competition-type';

const App: FC = () => {
    // useEffect(() => {
    //     const loader = new TeamCompetitionResultLoaderFromGoogleSheets();
    //     loader.loadData(TeamCompetitionType.GroupA).then((d) => {
    //         console.log('data from google', d);
    //     });
    // }, []);

    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <PersonalGroupABoys />
                <TeamGroupA />
            </main>
            <Footer />
        </>
    );
};

export default App;
