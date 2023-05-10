import React, { FC } from 'react';
import { TeamCompetitionResult } from '../../../../domain/team-competition-result';
import TeamCompetitionResultTable from './team-competition-result-table';

export interface TeamCompetitionResultSectionProps {
    title: string;
    data: TeamCompetitionResult
};

const TeamCompetitionResultSection: FC<TeamCompetitionResultSectionProps> = ({ title, data }) => {
    return (
        <section>
            <div className="content-wrapper mb-15">
                <h3>
                    {title}
                </h3>
            </div>
            <TeamCompetitionResultTable data={data} />
        </section>
    );
};

export default TeamCompetitionResultSection;
