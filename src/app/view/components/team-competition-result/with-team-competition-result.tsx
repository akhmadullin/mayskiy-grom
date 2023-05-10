import React, { FC } from 'react';
import { TeamCompetitionResultSectionProps } from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import useTeamCompetitionResult from '../../hooks/use-team-competition-result';

const withTeamCompetitionResult = (
    Component: FC<TeamCompetitionResultSectionProps>,
    title: string,
    competitionType: TeamCompetitionType
): FC => {
    return () => {
        const { isFetching, data } = useTeamCompetitionResult(competitionType);

        if (isFetching) {
            return <div>{competitionType} - ПЛЕЙСХОЛДЕР</div>;
        }

        if (data === null) {
            return <div>{competitionType} - Что-то пошло не так, сорри</div>;
        }

        return <Component title={title} data={data} />;
    };
};

export default withTeamCompetitionResult;