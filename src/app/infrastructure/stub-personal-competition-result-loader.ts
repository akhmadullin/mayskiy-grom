import { RersonalCompetitionResultLoaderInterface } from '../application/personal-competition-result-loader';
import { PersonalCompetitionType } from '../domain/competition-type';
import { PersonalCompetitionResult } from '../domain/personal-competition-result';

const STUB_TIMEOUT = 500;

// const stubData: PersonalCompetitionResult = [
//     {
//         "startNumber": 1,
//         "person": "Рогожников Рогож",
//         "team": "Вибрам",
//         "time": "2:30",
//         "fail": "",
//         "place": 1
//     },
//     {
//         "startNumber": 2,
//         "person": "Петр Петров",
//         "team": "Клей",
//         "time": "2:45",
//         "fail": "",
//         "place": 2
//     },
//     {
//         "startNumber": 3,
//         "person": "Иван Иванов",
//         "team": "Клей",
//         "time": "3:00",
//         "fail": "",
//         "place": 4
//     },
//     {
//         "startNumber": 4,
//         "person": "Сидор Сидоров",
//         "team": "Клей",
//         "time": "2:45",
//         "fail": "",
//         "place": 3
//     },
//     {
//         "startNumber": 5,
//         "person": "Захаров Захар",
//         "team": "Клей",
//         "time": "1:45",
//         "fail": "снятие",
//         "place": 5
//     },
//     {
//         "startNumber": 6,
//         "person": "Дмитрий Дмитриевич",
//         "team": "Вибрам",
//         "time": "10:00",
//         "fail": "снятие",
//         "place": 6
//     },
// ];

const stubData: PersonalCompetitionResult = [
    { startNumber: 1, person: 'Петров Петя', team: 'Вибрам', time: '1:02', fail: null, place: null },
    { startNumber: 2, person: 'Иванов Ваня', team: 'Вибрам', time: '1:01', fail: null, place: null },
    { startNumber: 3, person: 'Курочкин Влад', team: 'Клещ', time: null, fail: null, place: null },
    { startNumber: 4, person: 'Петрунько Артем', team: 'Клещ', time: '5:05', fail: 'снятие', place: null },
    { startNumber: 5, person: 'Додик Додик', team: 'Клещ', time: '1:01', fail: null, place: null },
    { startNumber: 6, person: 'Краснов Дима', team: 'Поток', time: null, fail: null, place: null },
    { startNumber: 7, person: 'Алексеев Александр', team: 'Поток', time: null, fail: null, place: null },
    { startNumber: 8, person: 'Душный Владивслав', team: 'Поток', time: '6:06', fail: 'снятие', place: null },
    { startNumber: 9, person: 'Жабин Марк', team: 'Вершина', time: '5:05', fail: 'снятие', place: null },
    { startNumber: 10, person: 'Мощный Семен', team: 'Вершина', time: '5:05', fail: 'снятие', place: null },
];

export class StubRersonalCompetitionResultLoader implements RersonalCompetitionResultLoaderInterface {
    public loadData(competitionType: PersonalCompetitionType): Promise<PersonalCompetitionResult | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(stubData);
            }, STUB_TIMEOUT)
        });
    }
}