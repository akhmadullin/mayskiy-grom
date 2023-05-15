import React, { FC, ReactElement } from 'react';
import { PersonalCompetitionResult } from '../../../../domain/personal-competition-result';
import PersonalCompetitionResultTable from './personal-competition-result-table';

export interface PersonalCompetitionResultSectionProps {
    title: string;
    data: PersonalCompetitionResult
    updateButton?: ReactElement;
};

const PersonalCompetitionResultSection: FC<PersonalCompetitionResultSectionProps> = ({ title, data, updateButton }) => {
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
            <PersonalCompetitionResultTable data={data} />
        </section>
    );
};

export default PersonalCompetitionResultSection;
