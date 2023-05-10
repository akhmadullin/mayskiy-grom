import { TeamCompetitionResultLoaderInterface } from '../application/team-competition-result-loader';
import { TeamCompetitionType } from '../domain/competition-type';
import { TeamCompetitionResult } from '../domain/team-competition-result';

const STUB_TIMEOUT = 500;

const stubData: TeamCompetitionResult = [
    {
        "teamName": "Клей",
        "teamMembers": [
            {
                "surnameAndName": "Петр Петров",
                "personalTime": "2:45"
            },
            {
                "surnameAndName": "Иван Иванов",
                "personalTime": "3:00"
            },
            {
                "surnameAndName": "Сидор Сидоров",
                "personalTime": "2:45"
            },
            {
                "surnameAndName": "Захаров Захар",
                "personalTime": "1:45"
            }
        ],
        "totalTime": "10:15",
        "place": 1
    },
    {
        "teamName": "Момент",
        "teamMembers": [
            {
                "surnameAndName": "Ванька Ванькович",
                "personalTime": "2:45"
            },
            {
                "surnameAndName": "Иван Иванов",
                "personalTime": "5:00"
            },
            {
                "surnameAndName": "Сидор Сидоров",
                "personalTime": "2:45"
            },
            {
                "surnameAndName": "Опля ЛДпопо",
                "personalTime": "1:45"
            }
        ],
        "totalTime": "12:15",
        "place": 2
    }
];

export class StubTeamCompetitionResultLoader implements TeamCompetitionResultLoaderInterface {
    public loadData(competitionType: TeamCompetitionType): Promise<TeamCompetitionResult | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(stubData);
            }, STUB_TIMEOUT)
        });
    }
}