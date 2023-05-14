import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResult from './with-personal-competition-result';

const title = "Группа A | Девушки | Личный забег";

const PersonalGroupAGirls = withPersonalCompetitionResult(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupAGirls, '168px');

export default PersonalGroupAGirls;
