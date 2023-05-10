import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResult from './with-personal-competition-result';

const title = "Группа B девочки (личный забег)";

const PersonalGroupBGirls = withPersonalCompetitionResult(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupBGirls);

export default PersonalGroupBGirls;
