import React, { FC } from 'react';
import { PersonalCompetitionResultSectionProps } from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import usePersonalCompetitionResult from '../../hooks/use-personal-competition-result';
import TableSectionPlaceholder from '../table-section-placeholder';

const withPersonalCompetitionResult = (
    Component: FC<PersonalCompetitionResultSectionProps>,
    title: string,
    competitionType: PersonalCompetitionType
): FC => {
    return () => {
        const { isFetching, data } = usePersonalCompetitionResult(competitionType);

        if (isFetching) {
            return <TableSectionPlaceholder title={title} isAnimated />;
        }

        if (data === null) {
            return <TableSectionPlaceholder title={title} placeholderText="Результаты будут доступны позже" />;
        }

        return <Component title={title} data={data} />;
    };
};

export default withPersonalCompetitionResult;