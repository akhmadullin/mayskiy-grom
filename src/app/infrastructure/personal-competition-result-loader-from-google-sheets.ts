import { PersonalCompetitionResultLoaderInterface } from '../application/personal-competition-result-loader';
import { PersonalCompetitionResult, PersonalCompetitionResultItem } from '../domain/personal-competition-result';
import { PersonalCompetitionType } from '../domain/competition-type';

type StartNumber = string;
type Person = string;
type Team = string;
type Time = string;
type Fail = string;
// type Place = string;


// type RawPersonalCompetitionResultItem = [StartNumber, Person, Team, Time, Fail, Place];
type RawPersonalCompetitionResultItem = [StartNumber, Person, Team, Time, Fail];

type RawPersonalCompetitionResult = RawPersonalCompetitionResultItem[];

const TABLE_ID = '1j1lZ_gFN8z2CajEUB6uUXIYeqmk_dbrfF0lAYHu1_y4';
const API_KEY = 'AIzaSyAcyB2mxRaJZWA9tHVOot2Gn1WevhhN17o';

const googleSheetsNames: Record<PersonalCompetitionType, string> = {
    [PersonalCompetitionType.GroupABoys]: 'A-boys-personal',
    [PersonalCompetitionType.GroupAGirls]: 'A-girls-personal',
    [PersonalCompetitionType.GroupBBoys]: 'B-boys-personal',
    [PersonalCompetitionType.GroupBGirls]: 'B-girls-personal',
};

const toNumber = (value: unknown): number => {
    return Number(value);
};

const toString = (value: unknown): string => {
    return String(value).trim();
};

const toValueOrNull = <V>(value: V): V | null => {
    return Boolean(value) === true ? value : null;
};

export class PersonalCompetitionResultLoaderFromGoogleSheets implements PersonalCompetitionResultLoaderInterface {
    public async loadData(competitionType: PersonalCompetitionType): Promise<PersonalCompetitionResult | null> {
        try {
            const apiUrl = this.getApiUrl(competitionType);
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
                throw new Error('Ошибка получения данных с сервера');
            }
    
            const data: {
                values: RawPersonalCompetitionResult
            } = await response.json();
    
            return this.prepareRawData(data.values.slice(2));
        }
        catch (e) {
            console.error(e);
        }

        return null;
    }

    private getApiUrl(competitionType: PersonalCompetitionType) {
        return `https://sheets.googleapis.com/v4/spreadsheets/${TABLE_ID}/values/${googleSheetsNames[competitionType]}?key=${API_KEY}`
    }

    private prepareRawData(rawData: RawPersonalCompetitionResult): PersonalCompetitionResult {
        // return rawData.map(([startNumber, person, team, time, fail, place]) => {
        return rawData.map(([startNumber, person, team, time, fail]) => {
            return {
                startNumber: toNumber(startNumber),
                person: toString(person),
                team: toString(team),
                time: toValueOrNull(toString(time)),
                fail: toValueOrNull(toString(fail)),
                // place: toNumber(place),
                place: null,
            };
        });
    };
}
