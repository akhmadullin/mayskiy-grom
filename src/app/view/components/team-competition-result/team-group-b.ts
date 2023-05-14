import TeamCompetitionResultSection from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import withTeamCompetitionResult from './with-team-competition-result';

const title = "Группа B | Командный забег";

const TeamGroupB = withTeamCompetitionResult(TeamCompetitionResultSection, title, TeamCompetitionType.GroupB, '629px');

export default TeamGroupB;
