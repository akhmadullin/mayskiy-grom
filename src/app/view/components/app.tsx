import React, { FC, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import IntroSection from './intro-section';
// import PersonalGroupABoys from './personal-competition-result';
import PersonalGroupABoys from './personal-competition-result/personal-group-a-boys';
import PersonalGroupAGirls from './personal-competition-result/personal-group-a-girls';
import TeamGroupA from './team-competition-result/team-group-a';
import PersonalGroupBBoys from './personal-competition-result/personal-group-b-boys';
import PersonalGroupBGirls from './personal-competition-result/personal-group-b-girls';
import TeamGroupB from './team-competition-result/team-group-b';

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
                {/* <PersonalGroupABoys /> */}
                <PersonalGroupABoys />
                <PersonalGroupAGirls />
                <TeamGroupA />

                <PersonalGroupBBoys />
                <PersonalGroupBGirls />
                <TeamGroupB />
            </main>
            <Footer />
        </>
    );
};

export default App;
