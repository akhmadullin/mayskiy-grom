import { PersonalCompetitionType }  from '../domain/competition-type';
import { PersonalCompetitionResult } from '../domain/personal-competition-result';

export interface RersonalCompetitionResultLoaderInterface {
    loadData(competitionType: PersonalCompetitionType): Promise<PersonalCompetitionResult | null>;
}