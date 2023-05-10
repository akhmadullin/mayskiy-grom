import { DataLoaderInterface } from '../application/data-loader';
import { AgeGroup } from '../domain/age-group';
import { CompetitionResult } from '../domain/competition-result';

const STUB_TIMEOUT = 500;

const stubData: CompetitionResult = [
    {
        person: "Иванов И. И.",
        team: "Вибрам",
        time: "0:48",
        place:  "1",
    },
    {
        person: "Петров П. И.",
        team: "Поток",
        time: "0:50",
        place:  "2",
    },
    {
        person: "Сидоров К. Е.",
        team: "Клещ",
        time: "0:52",
        place:  "3",
    },
    {
        person: "Савельев К. К.",
        team: "Клещ",
        time: "0:53",
    },
];

export class StubDataLoader implements DataLoaderInterface {
    public loadData(ageGroup: AgeGroup): Promise<CompetitionResult | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(stubData);
            }, STUB_TIMEOUT)
        });
    }
}