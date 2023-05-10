import React, { FC } from 'react';
import { PersonalCompetitionResultSectionProps } from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import usePersonalCompetitionResult from '../../hooks/use-personal-competition-result';

const withPersonalCompetitionResult = (
    Component: FC<PersonalCompetitionResultSectionProps>,
    title: string,
    competitionType: PersonalCompetitionType
): FC => {
    return () => {
        const { isFetching, data } = usePersonalCompetitionResult(competitionType);

        if (isFetching) {
            return <div>{competitionType} - ПЛЕЙСХОЛДЕР</div>;
        }

        if (data === null) {
            return <div>{competitionType} - Что-то пошло не так, сорри</div>;
        }

        return <Component title={title} data={data} />;
    };
};

export default withPersonalCompetitionResult;