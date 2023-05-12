import React, { FC } from 'react';
import { TeamCompetitionResultSectionProps } from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import useTeamCompetitionResult from '../../hooks/use-team-competition-result';
import TableSectionPlaceholder from '../table-section-placeholder';

const withTeamCompetitionResult = (
    Component: FC<TeamCompetitionResultSectionProps>,
    title: string,
    competitionType: TeamCompetitionType
): FC => {
    return () => {
        const { isFetching, data } = useTeamCompetitionResult(competitionType);

        if (isFetching) {
            return <TableSectionPlaceholder title={title} isAnimated />;
        }

        if (data === null) {
            return <TableSectionPlaceholder title={title} placeholderText="Результаты будут доступны позже" />;
        }

        return <Component title={title} data={data} />;
    };
};

export default withTeamCompetitionResult;