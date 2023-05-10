import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResult from './with-personal-competition-result';

const title = "Группа B мальчики (личный забег)";

const PersonalGroupBBoys = withPersonalCompetitionResult(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupBBoys);

export default PersonalGroupBBoys;
