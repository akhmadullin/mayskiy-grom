import React, { FC } from 'react';
import { PersonalCompetitionResultSectionProps } from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import { personalCompetitionResultData } from '../../api-ready-data';

const withPersonalCompetitionResultReadyData = (
    Component: FC<PersonalCompetitionResultSectionProps>,
    title: string,
    competitionType: PersonalCompetitionType
): FC => {
    return () => {
        const data = personalCompetitionResultData[competitionType];
        return <Component title={title} data={data} />;
    };
};

export default withPersonalCompetitionResultReadyData;