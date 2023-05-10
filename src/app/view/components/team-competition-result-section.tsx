import React, { FC } from 'react';
import { TeamCompetitionResult } from '../../domain/team-competition-result';
import TeamCompetitionResultTable from './team-competition-result-table';

interface TeamCompetitionResultSectionProps {
    title: string;
    data: TeamCompetitionResult
};

const TeamCompetitionResultSection: FC<TeamCompetitionResultSectionProps> = ({ title, data }) => {
    return (
        <section>
            <h3>
                {title}
            </h3>
            <TeamCompetitionResultTable data={data} />
        </section>
    );
};

export default TeamCompetitionResultSection;
