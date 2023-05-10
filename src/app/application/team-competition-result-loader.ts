import { TeamCompetitionType }  from '../domain/competition-type';
import { TeamCompetitionResult } from '../domain/team-competition-result';

export interface TeamCompetitionResultLoaderInterface {
    loadData(competitionType: TeamCompetitionType): Promise<TeamCompetitionResult | null>;
}