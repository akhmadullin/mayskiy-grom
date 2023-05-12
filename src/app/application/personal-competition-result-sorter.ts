import { PersonalCompetitionResult } from '../domain/personal-competition-result';

export interface PersonalCompetitionResultSorterInterface {
    sortAndDefinePlaces(data: PersonalCompetitionResult): PersonalCompetitionResult;
}