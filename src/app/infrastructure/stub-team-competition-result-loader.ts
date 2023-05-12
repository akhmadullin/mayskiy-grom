import { TeamCompetitionResultLoaderInterface } from '../application/team-competition-result-loader';
import { TeamCompetitionType } from '../domain/competition-type';
import { TeamCompetitionResult } from '../domain/team-competition-result';

const STUB_TIMEOUT = 500;

// const stubData: TeamCompetitionResult = [
//     {
//         "teamName": "Клей",
//         "teamMembers": [
//             {
//                 "surnameAndName": "Петр Петров",
//                 "personalTime": "2:45"
//             },
//             {
//                 "surnameAndName": "Иван Иванов",
//                 "personalTime": "3:00"
//             },
//             {
//                 "surnameAndName": "Сидор Сидоров",
//                 "personalTime": "2:45"
//             },
//             {
//                 "surnameAndName": "Захаров Захар",
//                 "personalTime": "1:45"
//             }
//         ],
//         "totalTime": "10:15",
//         "place": 1
//     },
//     {
//         "teamName": "Момент",
//         "teamMembers": [
//             {
//                 "surnameAndName": "Ванька Ванькович",
//                 "personalTime": "2:45"
//             },
//             {
//                 "surnameAndName": "Иван Иванов",
//                 "personalTime": "5:00"
//             },
//             {
//                 "surnameAndName": "Сидор Сидоров",
//                 "personalTime": "2:45"
//             },
//             {
//                 "surnameAndName": "Опля ЛДпопо",
//                 "personalTime": "1:45"
//             }
//         ],
//         "totalTime": "12:15",
//         "place": 2
//     }
// ];

const stubData: TeamCompetitionResult = [
    { 
        teamName: 'Поток',
        teamMembers: [
            { surnameAndName: 'Иванов Иван', personalTime: '3:45' },
            { surnameAndName: 'Петров Петр', personalTime: '2:00' },
            { surnameAndName: 'Сидоров Сидр', personalTime: '5:45' },
            { surnameAndName: 'Мощный Давид', personalTime: '3:45' },
        ],
        totalTime: '15:15',
        place: null,
    },
    { 
        teamName: 'Вибрам',
        teamMembers: [
            { surnameAndName: 'Иванов Иван', personalTime: '1:45' },
            { surnameAndName: 'Петров Петр', personalTime: '1:00' },
            { surnameAndName: 'Сидоров Сидр', personalTime: '1:45' },
            { surnameAndName: 'Мощный Давид', personalTime: '0:45' },
        ],
        totalTime: '5:15',
        place: null,
    },
    { 
        teamName: 'Клещ',
        teamMembers: [
            { surnameAndName: 'Иванов Иван', personalTime: '2:30' },
            { surnameAndName: 'Петров Петр', personalTime: '2:45' },
            { surnameAndName: 'Сидоров Сидр', personalTime: '3:00' },
            { surnameAndName: 'Мощный Давид', personalTime: '2:45' },
        ],
        totalTime: '10:15',
        place: null,
    },
    { 
        teamName: 'Вершина',
        teamMembers: [
            { surnameAndName: 'Иванов Иван', personalTime: null },
            { surnameAndName: 'Петров Петр', personalTime: null },
            { surnameAndName: 'Сидоров Сидр', personalTime: null },
            { surnameAndName: 'Мощный Давид', personalTime: null },
        ],
        totalTime: null,
        place: null,
    },
]
export class StubTeamCompetitionResultLoader implements TeamCompetitionResultLoaderInterface {
    public loadData(competitionType: TeamCompetitionType): Promise<TeamCompetitionResult | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(stubData);
            }, STUB_TIMEOUT)
        });
    }
}