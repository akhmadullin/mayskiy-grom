import React, { FC } from 'react';
import { PersonalCompetitionResult } from '../../../../domain/personal-competition-result';
import PersonalCompetitionResultTable from './personal-competition-result-table';

export interface PersonalCompetitionResultSectionProps {
    title: string;
    data: PersonalCompetitionResult
};

const PersonalCompetitionResultSection: FC<PersonalCompetitionResultSectionProps> = ({ title, data }) => {
    return (
        <section>
            <h3>
                {title}
            </h3>
            <PersonalCompetitionResultTable data={data} />
        </section>
    );
};

export default PersonalCompetitionResultSection;
