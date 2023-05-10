// type Person = string;

// type Team = string;

// type Time = string;

// type Place = string;

// type CompetitionResultItem = [Person, Team, Time, Place] | [Person, Team, Time];

// Порядок старта 	ФИ	Команда 	Беговое время 	Снятие 	Место 

export interface PersonalCompetitionResultItem {
    startNumber: number;
    person: string;
    team: string;
    time: string;
    fail?: string;
    place: number;
}

export type PersonalCompetitionResult = PersonalCompetitionResultItem[];