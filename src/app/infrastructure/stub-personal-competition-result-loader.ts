import { RersonalCompetitionResultLoaderInterface } from '../application/personal-competition-result-loader';
import { PersonalCompetitionType } from '../domain/competition-type';
import { PersonalCompetitionResult } from '../domain/personal-competition-result';

const STUB_TIMEOUT = 500;

const stubData: PersonalCompetitionResult = [
    {
        "startNumber": 1,
        "person": "Рогожников Рогож",
        "team": "Вибрам",
        "time": "2:30",
        "fail": "",
        "place": 1
    },
    {
        "startNumber": 2,
        "person": "Петр Петров",
        "team": "Клей",
        "time": "2:45",
        "fail": "",
        "place": 2
    },
    {
        "startNumber": 3,
        "person": "Иван Иванов",
        "team": "Клей",
        "time": "3:00",
        "fail": "",
        "place": 4
    },
    {
        "startNumber": 4,
        "person": "Сидор Сидоров",
        "team": "Клей",
        "time": "2:45",
        "fail": "",
        "place": 3
    },
    {
        "startNumber": 5,
        "person": "Захаров Захар",
        "team": "Клей",
        "time": "1:45",
        "fail": "снятие",
        "place": 5
    },
    {
        "startNumber": 6,
        "person": "Дмитрий Дмитриевич",
        "team": "Вибрам",
        "time": "10:00",
        "fail": "снятие",
        "place": 6
    },
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