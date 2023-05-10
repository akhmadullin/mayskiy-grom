import { combineReducers } from '@reduxjs/toolkit';
import personalCompetitionResult from './slices/personal-competition-result-slice';
import teamCompetitionResult from './slices/team-competition-result-slice';

const reducer = combineReducers({
    personalCompetitionResult,
    teamCompetitionResult,
});

export default reducer;
