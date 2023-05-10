import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';
import { request as requestPersonal, recieve as recievePersonal } from './slices/personal-competition-result-slice';
import { request as requestTeam, recieve as recieveTeam } from './slices/team-competition-result-slice';
import { PersonalCompetitionType, TeamCompetitionType } from '../../domain/competition-type';
import { RersonalCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/personal-competition-result-loader-from-google-sheets'
import { TeamCompetitionResultLoaderFromGoogleSheets } from '../../infrastructure/team-competition-result-loader-from-google-sheets'

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// const personalCompetitions = [PersonalCompetitionType.GroupABoys, PersonalCompetitionType.GroupAGirls, PersonalCompetitionType.GroupBBoys, PersonalCompetitionType.GroupBGirls];
// const personalCompetitionResultLoader = new RersonalCompetitionResultLoaderFromGoogleSheets();
// personalCompetitions.forEach(async (competitionType) => {
//     store.dispatch(request(competitionType));
//     const data = await personalCompetitionResultLoader.loadData(competitionType);
//     store.dispatch(recieve({ key: competitionType, data }));
// });

// const teamCompetitions = [TeamCompetitionType.GroupA, TeamCompetitionType.GroupB];
// const teamCompetitionResultLoader = new TeamCompetitionResultLoaderFromGoogleSheets();
// teamCompetitions.forEach(async (competitionType) => {
//     store.dispatch(requestTeam(competitionType));
//     const data = await teamCompetitionResultLoader.loadData(competitionType);
//     store.dispatch(recieveTeam({ key: competitionType, data }));
// });

export default store;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;