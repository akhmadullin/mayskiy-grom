// Команда 	Участники 	Беговое время (личка)	Общее время	Место 

interface TeamMember {
    surnameAndName: string;
    personalTime: string | null;
}

export interface TeamCompetitionResultItem {
    teamName: string;
    teamMembers: TeamMember[];
    totalTime: string | null;
    place: number | null;
}

export type TeamCompetitionResult = TeamCompetitionResultItem[];

export const TEAM_MEMBERS_COUNT = 4;