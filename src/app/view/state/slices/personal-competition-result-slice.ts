import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import { PersonalCompetitionResult } from '../../../domain/personal-competition-result';

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