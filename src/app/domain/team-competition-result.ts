// Команда 	Участники 	Беговое время (личка)	Общее время	Место 

interface TeamMember {
    surnameAndName: string;
    personalTime: string
}

export interface TeamCompetitionResultItem {
    teamName: string;
    teamMembers: TeamMember[];
    totalTime: string;
    place: number;
}

export type TeamCompetitionResult = TeamCompetitionResultItem[];

export const TEAM_MEMBERS_COUNT = 4;