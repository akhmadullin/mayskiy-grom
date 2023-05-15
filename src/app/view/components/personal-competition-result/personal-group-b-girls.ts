import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResultReadyData from './with-personal-competition-result-ready-data';

const title = "Группа B | Девушки | Личный забег";

const PersonalGroupBGirls = withPersonalCompetitionResultReadyData(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupBGirls);

export default PersonalGroupBGirls;
