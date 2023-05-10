import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamCompetitionType } from '../../../domain/competition-type';
import { TeamCompetitionResult } from '../../../domain/team-competition-result';

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
                data: TeamCompetitionResult;
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