import { PersonalCompetitionType }  from '../domain/competition-type';
import { PersonalCompetitionResult } from '../domain/personal-competition-result';

export interface PersonalCompetitionResultLoaderInterface {
    loadData(competitionType: PersonalCompetitionType): Promise<PersonalCompetitionResult | null>;
}