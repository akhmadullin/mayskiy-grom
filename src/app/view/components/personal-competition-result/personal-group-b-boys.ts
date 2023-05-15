import PersonalCompetitionResultSection from './views/personal-competition-result-section';
import { PersonalCompetitionType } from '../../../domain/competition-type';
import withPersonalCompetitionResultReadyData from './with-personal-competition-result-ready-data';

const title = "Группа B | Юноши | Личный забег";

const PersonalGroupBBoys = withPersonalCompetitionResultReadyData(PersonalCompetitionResultSection, title, PersonalCompetitionType.GroupBBoys);

export default PersonalGroupBBoys;
