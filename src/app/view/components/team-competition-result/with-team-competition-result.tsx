import React, { FC } from 'react';
import { TeamCompetitionResultSectionProps } from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import useTeamCompetitionResult from '../../hooks/use-team-competition-result';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { loadTeamCompetitionResult } from '../../state/slices/team-competition-result-slice';
import TableSectionPlaceholder from '../table-section-placeholder';
import UpdateButton from '../update-button';

const withTeamCompetitionResult = (
    Component: FC<TeamCompetitionResultSectionProps>,
    title: string,
    competitionType: TeamCompetitionType
): FC => {
    return () => {
        const { isFetching, data } = useTeamCompetitionResult(competitionType);

        const dispatch = useAppDispatch();
        const updateData = () => {
            dispatch(loadTeamCompetitionResult(competitionType));
        };
    
        const updateDataButton = <UpdateButton isFetching={isFetching} updateData={updateData} />;

        if (isFetching) {
            return <TableSectionPlaceholder title={title} isAnimated updateButton={updateDataButton} />;
        }

        if (data === null) {
            return <TableSectionPlaceholder title={title} placeholderText="Результаты будут доступны позже" updateButton={updateDataButton} />;
        }

        return <Component title={title} data={data} updateButton={updateDataButton} />;
    };
};

export default withTeamCompetitionResult;