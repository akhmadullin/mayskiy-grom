import React, { FC } from 'react';
import TeamCompetitionResultSection from './team-competition-result-section';
import { TeamCompetitionResult } from '../../domain/team-competition-result';

const title = 'Группа А (командный забег)';
const data: TeamCompetitionResult = [
    {
        teamName: 'Вибрам',
        teamMembers: [
            { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
            { surnameAndName: 'Петр Петров', personalTime: '02:54'},
            { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
            { surnameAndName: 'Додик додикович', personalTime: '03:58'},
        ],
        totalTime: '10:50',
        place: 1,
    },
    {
        teamName: 'Клещ',
        teamMembers: [
            { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
            { surnameAndName: 'Петр Петров', personalTime: '02:54'},
            { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
            { surnameAndName: 'Додик додикович', personalTime: '03:58'},
        ],
        totalTime: '10:50',
        place: 2,
    },
    {
        teamName: 'Поток',
        teamMembers: [
            { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
            { surnameAndName: 'Петр Петров', personalTime: '02:54'},
            { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
            { surnameAndName: 'Додик додикович', personalTime: '03:58'},
        ],
        totalTime: '10:50',
        place: 3,
    },
];

const TeamGroupA: FC = () => {
    return (
        <TeamCompetitionResultSection title={title} data={data} />
    );
};

export default TeamGroupA;
