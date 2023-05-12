import { PersonalCompetitionResult } from '../domain/personal-competition-result';

export interface PersonalCompetitionResultSorterInterface {
    definePlacesAndSort(data: PersonalCompetitionResult): PersonalCompetitionResult;
}