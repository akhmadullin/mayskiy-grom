import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import reducer from './reducer';
import { loadPersonalCompetitionResult } from './slices/personal-competition-result-slice';
import { loadTeamCompetitionResult } from './slices/team-competition-result-slice';
import { PersonalCompetitionType, TeamCompetitionType } from '../../domain/competition-type';
import { RersonalCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/personal-competition-result-loader-from-google-sheets'
import { TeamCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/team-competition-result-loader-from-google-sheets'

const store = configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const personalCompetitions = [PersonalCompetitionType.GroupABoys, PersonalCompetitionType.GroupAGirls, PersonalCompetitionType.GroupBBoys, PersonalCompetitionType.GroupBGirls];
personalCompetitions.forEach((competitionType) => {
    store.dispatch(loadPersonalCompetitionResult(competitionType));
});

const teamCompetitions = [TeamCompetitionType.GroupA, TeamCompetitionType.GroupB];
teamCompetitions.forEach((competitionType) => {
    store.dispatch(loadTeamCompetitionResult(competitionType));
});

export default store;
