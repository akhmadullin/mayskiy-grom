import React, { FC, ReactElement } from 'react';
import { TeamCompetitionResult } from '../../../../domain/team-competition-result';
import TeamCompetitionResultTable from './team-competition-result-table';

export interface TeamCompetitionResultSectionProps {
    title: string;
    data: TeamCompetitionResult
    updateButton?: ReactElement;
};

const TeamCompetitionResultSection: FC<TeamCompetitionResultSectionProps> = ({ title, data, updateButton }) => {
    return (
        <section>
            <div className="content-wrapper">
                <div className="section-title-button-row">
                    <h3 className="mb-15">
                        {title}
                    </h3>
                    {updateButton && (
                        <div className="mb-15">
                            {updateButton}
                        </div>
                    )}
                </div>
            </div>
            <TeamCompetitionResultTable data={data} />
        </section>
    );
};

export default TeamCompetitionResultSection;
