import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamCompetitionType } from '../../../domain/competition-type';
import { TeamCompetitionResult } from '../../../domain/team-competition-result';
import { AppThunk } from '../types';
import { TeamCompetitionResultLoaderFromGoogleSheets } from '../../../infrastructure/team-competition-result-loader-from-google-sheets';
import { TeamCompetitionResultSorter } from '../../../infrastructure/team-competition-result-sorter';
// import { StubTeamCompetitionResultLoader } from '../../../infrastructure/stub-team-competition-result-loader';

interface DataByType {
    isFetching: boolean;
    data: TeamCompetitionResult | null;
}

type PersonalCompetitionResultState = Record<TeamCompetitionType, DataByType>;

const getEmptyState = () => {
    return {
        isFetching: false,
        data: null,
    }
};

const initialState: PersonalCompetitionResultState = {
    [TeamCompetitionType.GroupA]: getEmptyState(), 
    [TeamCompetitionType.GroupB]: getEmptyState(),
};

const teamCompetitionResultSlice = createSlice({
    name: 'team-competition-result',
    initialState,
    reducers: {
       request: (state, action: PayloadAction<TeamCompetitionType>) => {
            state[action.payload] = {
                isFetching: true,
                data: null,
            };
        },
        recieve: (
            state,
            action: PayloadAction<{
                key: TeamCompetitionType;
                data: TeamCompetitionResult | null;
            }>
        ) => {
            state[action.payload.key] = {
                isFetching: false,
                data: action.payload.data,
            };
        },
    },
});

export const { request, recieve } = teamCompetitionResultSlice.actions;

export default teamCompetitionResultSlice.reducer;

export const loadTeamCompetitionResult = (competitionType: TeamCompetitionType): AppThunk => async (dispatch) => {
    dispatch(request(competitionType));

    try {
        const teamCompetitionResultLoader = new TeamCompetitionResultLoaderFromGoogleSheets();
        // const teamCompetitionResultLoader = new StubTeamCompetitionResultLoader();
        const data = await teamCompetitionResultLoader.loadData(competitionType);

        if (data === null) {
            dispatch(recieve({key: competitionType, data: null}));
            return;
        } 

        const sorter = new TeamCompetitionResultSorter();

        dispatch(recieve({ key: competitionType, data: sorter.sortAndDefinePlaces(data) }));
    } catch (e) {
        console.error('Error during loading team competition result', e);
        dispatch(recieve({key: competitionType, data: null}));
    }
};