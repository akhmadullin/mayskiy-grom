import { TeamCompetitionResult } from '../domain/team-competition-result';

export interface TeamCompetitionResultSorterInterface {
    sortAndDefinePlaces(data: TeamCompetitionResult): TeamCompetitionResult;
}