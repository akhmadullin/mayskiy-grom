import React, { FC } from 'react';
import { PersonalCompetitionResultSectionProps } from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import usePersonalCompetitionResult from '../../hooks/use-personal-competition-result';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { loadPersonalCompetitionResult } from '../../state/slices/personal-competition-result-slice';
import TableSectionPlaceholder from '../table-section-placeholder';
import UpdateButton from '../update-button';

const withPersonalCompetitionResult = (
    Component: FC<PersonalCompetitionResultSectionProps>,
    title: string,
    competitionType: PersonalCompetitionType,
    placeholderHeight?: string,
): FC => {
    return () => {
        const { isFetching, data } = usePersonalCompetitionResult(competitionType);

        const dispatch = useAppDispatch();
        const updateData = () => {
            dispatch(loadPersonalCompetitionResult(competitionType));
        };
    
        const updateDataButton = <UpdateButton isFetching={isFetching} updateData={updateData} />;

        if (isFetching) {
            return <TableSectionPlaceholder title={title} isAnimated updateButton={updateDataButton} placeholderHeight={placeholderHeight}  />;
        }

        if (data === null) {
            return <TableSectionPlaceholder title={title} placeholderText="Результаты будут доступны позже" updateButton={updateDataButton} placeholderHeight={placeholderHeight} />;
        }

        return <Component title={title} updateButton={updateDataButton} data={data} />;
    };
};

export default withPersonalCompetitionResult;