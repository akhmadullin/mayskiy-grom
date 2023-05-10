import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import { PersonalCompetitionResult } from '../../../domain/personal-competition-result';
import { AppThunk } from '../types';
import { RersonalCompetitionResultLoaderFromGoogleSheets } from '../../../infrastructure/personal-competition-result-loader-from-google-sheets';
import { StubRersonalCompetitionResultLoader } from '../../../infrastructure/stub-personal-competition-result-loader';


interface DataByType {
    isFetching: boolean;
    data: PersonalCompetitionResult | null;
}

type PersonalCompetitionResultState = Record<PersonalCompetitionType, DataByType>;

const getEmptyState = () => {
    return {
        isFetching: false,
        data: null,
    }
};

const initialState: PersonalCompetitionResultState = {
    [PersonalCompetitionType.GroupABoys]: getEmptyState(), 
    [PersonalCompetitionType.GroupAGirls]: getEmptyState(),
    [PersonalCompetitionType.GroupBBoys]: getEmptyState(), 
    [PersonalCompetitionType.GroupBGirls]: getEmptyState(),
};

const personalCompetitionResultSlice = createSlice({
    name: 'personal-competition-result',
    initialState,
    reducers: {
       request: (state, action: PayloadAction<PersonalCompetitionType>) => {
            state[action.payload] = {
                isFetching: true,
                data: null,
            };
        },
        recieve: (
            state,
            action: PayloadAction<{
                key: PersonalCompetitionType;
                data: PersonalCompetitionResult;
            }>
        ) => {
            state[action.payload.key] = {
                isFetching: false,
                data: action.payload.data,
            };
        },
    },
});

export const { request, recieve } = personalCompetitionResultSlice.actions;

export default personalCompetitionResultSlice.reducer;

export const loadPersonalCompetitionResult = (competitionType: PersonalCompetitionType): AppThunk => async (dispatch) => {
    dispatch(request(competitionType));
    // const personalCompetitionResultLoader = new RersonalCompetitionResultLoaderFromGoogleSheets();
    const personalCompetitionResultLoader = new StubRersonalCompetitionResultLoader();
    const data = await personalCompetitionResultLoader.loadData(competitionType);
    dispatch(recieve({ key: competitionType, data }));
};