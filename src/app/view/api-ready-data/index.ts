import { PersonalCompetitionType, TeamCompetitionType } from '../../domain/competition-type';
import { personalGroupABoys } from './personal-group-a-boys';
import { personalGroupAGirls } from './personal-group-a-girls';
import { personalGroupBBoys } from './personal-group-b-boys';
import { personalGroupBGirls } from './personal-group-b-girls';
import { teamGroupA } from './team-group-a';
import { teamGroupB } from './team-group-b';
import { PersonalCompetitionResult } from '../../domain/personal-competition-result';
import { TeamCompetitionResult } from '../../domain/team-competition-result';

export const personalCompetitionResultData: Record<PersonalCompetitionType, PersonalCompetitionResult> = {
    [PersonalCompetitionType.GroupABoys]: personalGroupABoys,
    [PersonalCompetitionType.GroupAGirls]: personalGroupAGirls,
    [PersonalCompetitionType.GroupBBoys]: personalGroupBBoys,
    [PersonalCompetitionType.GroupBGirls]: personalGroupBGirls,
};

export const teamCompetitionResultData: Record<TeamCompetitionType, TeamCompetitionResult> = {
    [TeamCompetitionType.GroupA]: teamGroupA,
    [TeamCompetitionType.GroupB]: teamGroupB,
};
