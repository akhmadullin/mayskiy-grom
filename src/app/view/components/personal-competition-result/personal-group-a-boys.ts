// import React, { FC } from 'react';
// import PersonalCompetitionResultSection from '../personal-competition-result/views/personal-competition-result-section';
// import { PersonalCompetitionResult } from '../../../domain/personal-competition-result';

// const title = "Группа  A мальчики (личный забег)";
// const data: PersonalCompetitionResult = [
//     {
//         startNumber: 1,
//         person: 'Иванов Иван',
//         team: 'Вибрам',
//         time: '02:52',
//         // fail: 'Снятие',
//         place: 1,
//     },
//     {
//         startNumber: 2,
//         person: 'Петров Петр',
//         team: 'Вибрам',
//         time: '03:52',
//         fail: 'Снятие',
//         place: 5,
//     },
//     {
//         startNumber: 3,
//         person: 'Сидоров Сидр',
//         team: 'Клещ',
//         time: '02:57',
//         fail: 'Снятие',
//         place: 2,
//     },
// ];

// const PersonalGroupABoys: FC = () => {
//     return (
//         <PersonalCompetitionResultSection title={title} data={data} />
//     );
// };

// export default PersonalGroupABoys;

import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResultReadyData from './with-personal-competition-result-ready-data';

const title = "Группа A | Юноши | Личный забег";

const PersonalGroupABoys = withPersonalCompetitionResultReadyData(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupABoys);

export default PersonalGroupABoys;
