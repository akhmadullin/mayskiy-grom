import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResult from './with-personal-competition-result';

const title = "Группа  A девочки (личный забег)";

const PersonalGroupAGirls = withPersonalCompetitionResult(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupAGirls);

export default PersonalGroupAGirls;
