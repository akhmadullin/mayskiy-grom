import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResult from './with-personal-competition-result';

const title = "Группа B | Девушки | Личный забег";

const PersonalGroupBGirls = withPersonalCompetitionResult(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupBGirls, '242px');

export default PersonalGroupBGirls;
