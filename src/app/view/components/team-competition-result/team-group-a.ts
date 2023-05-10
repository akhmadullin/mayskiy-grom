import TeamCompetitionResultSection from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import withTeamCompetitionResult from './with-team-competition-result';

const title = "Группа  A (командный забег)";

// const data: TeamCompetitionResult = [
//     {
//         teamName: 'Вибрам',
//         teamMembers: [
//             { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
//             { surnameAndName: 'Петр Петров', personalTime: '02:54'},
//             { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
//             { surnameAndName: 'Додик додикович', personalTime: '03:58'},
//         ],
//         totalTime: '10:50',
//         place: 1,
//     },
//     {
//         teamName: 'Клещ',
//         teamMembers: [
//             { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
//             { surnameAndName: 'Петр Петров', personalTime: '02:54'},
//             { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
//             { surnameAndName: 'Додик додикович', personalTime: '03:58'},
//         ],
//         totalTime: '10:50',
//         place: 2,
//     },
//     {
//         teamName: 'Поток',
//         teamMembers: [
//             { surnameAndName: 'Рогожников Рогож', personalTime: '02:50'},
//             { surnameAndName: 'Петр Петров', personalTime: '02:54'},
//             { surnameAndName: 'Бла-бла Бла-бла', personalTime: '02:58'},
//             { surnameAndName: 'Додик додикович', personalTime: '03:58'},
//         ],
//         totalTime: '10:50',
//         place: 3,
//     },
// ];

const TeamGroupA = withTeamCompetitionResult(TeamCompetitionResultSection, title, TeamCompetitionType.GroupB);

export default TeamGroupA;
