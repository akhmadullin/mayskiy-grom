import { TeamCompetitionResultLoaderInterface } from '../application/team-competition-result-loader';
import { TEAM_MEMBERS_COUNT, TeamCompetitionResult, TeamCompetitionResultItem } from '../domain/team-competition-result';
import { TeamCompetitionType } from '../domain/competition-type';

// teamName: 'Команда',
// teamMembers: 'Участники',
// teamMemebrsPersonalTime: 'Беговое время (личка)',
// totalTime: 'Общее время',
// place: 'Место',

type TeamName = string;
type PersonName = string;
type PersonalTeam = string;
type TeamTime = string;
type Place = string;


type RawTeamCompetitionResultItem = [TeamName, PersonName, PersonalTeam, TeamTime, Place];

type RawTeamCompetitionResult = RawTeamCompetitionResultItem[];

const TABLE_ID = '1j1lZ_gFN8z2CajEUB6uUXIYeqmk_dbrfF0lAYHu1_y4';
const API_KEY = 'AIzaSyAcyB2mxRaJZWA9tHVOot2Gn1WevhhN17o';

const googleSheetsNames: Record<TeamCompetitionType, string> = {
    [TeamCompetitionType.GroupA]: 'A-team',
    [TeamCompetitionType.GroupB]: 'B-team',
};

const toNumber = (value: unknown): number => {
    return Number(value);
};

const toString = (value: unknown): string => {
    return value ? String(value).trim() : '';
};

const toValueOrNull = <V>(value: V): V | null => {
    return Boolean(value) === true ? value : null;
};

export class TeamCompetitionResultLoaderFromGoogleSheets implements TeamCompetitionResultLoaderInterface {
    public async loadData(competitionType: TeamCompetitionType): Promise<TeamCompetitionResult | null> {
        try {
            const apiUrl = this.getApiUrl(competitionType);
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
                throw new Error('Ошибка получения данных с сервера');
            }
    
            const data: {
                values: RawTeamCompetitionResult
            } = await response.json();

            if (data.values[0][1] === 'нет') {
                return null;
            }
    
            return this.prepareRawData(data.values.slice(5));
        }
        catch (e) {
            console.error(e);
        }

        return null;
    }

    private getApiUrl(competitionType: TeamCompetitionType) {
        return `https://sheets.googleapis.com/v4/spreadsheets/${TABLE_ID}/values/${googleSheetsNames[competitionType]}?key=${API_KEY}`
    }

    private prepareRawData(rawData: RawTeamCompetitionResult): TeamCompetitionResult {
        // return rawData.map(([startNumber, person, team, time, fail, place]) => {
        //     return {
        //         startNumber: toNumber(startNumber),
        //         person: toString(person),
        //         team: toString(team),
        //         time: toString(time),
        //         fail: toString(fail),
        //         place: toNumber(place),
        //     };
        // });
        const result: TeamCompetitionResult = [];
        for (let idx = 0; idx < rawData.length; idx = idx + TEAM_MEMBERS_COUNT) {
            const [teamName, _, __, teamTime, place] = rawData[idx];
            const teamMembers = [rawData[idx], rawData[idx + 1], rawData[idx + 2], rawData[idx + 3]].map(([_, personName, personalTime]) => {
                return {
                    surnameAndName: toString(personName),
                    personalTime: toString(personalTime),
                };
            });

            const resultItem: TeamCompetitionResultItem = {
                teamName: toString(teamName),
                teamMembers,
                totalTime: toValueOrNull(toString(teamTime)),
                place: toValueOrNull(toNumber(place)),
            };

            result.push(resultItem);
        }
        return result;
    };
}
