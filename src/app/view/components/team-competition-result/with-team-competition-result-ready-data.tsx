import React, { FC } from 'react';
import { TeamCompetitionResultSectionProps } from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import { teamCompetitionResultData } from '../../api-ready-data';

const withTeamCompetitionResultReadyData = (
    Component: FC<TeamCompetitionResultSectionProps>,
    title: string,
    competitionType: TeamCompetitionType
): FC => {
    return () => {
        const data = teamCompetitionResultData[competitionType];
        return <Component title={title} data={data} />;
    };
};

export default withTeamCompetitionResultReadyData;