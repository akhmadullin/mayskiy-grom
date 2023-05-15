import TeamCompetitionResultSection from './views/team-competition-result-section';
import { TeamCompetitionType } from '../../../domain/competition-type';
import withTeamCompetitionResultReadyData from './with-team-competition-result-ready-data';

const title = "Группа B | Командный забег";

const TeamGroupB = withTeamCompetitionResultReadyData(TeamCompetitionResultSection, title, TeamCompetitionType.GroupB);

export default TeamGroupB;
