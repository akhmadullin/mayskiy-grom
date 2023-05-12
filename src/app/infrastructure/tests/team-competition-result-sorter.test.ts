import { TeamCompetitionResult } from '../../domain/team-competition-result';
import { TeamCompetitionResultSorter } from '../team-competition-result-sorter';

describe('TeamCompetitionResultSorter - class, that defines places and sort data by place', () => {
    test(('no one has time'), () => {
        const input: TeamCompetitionResult = [
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: null },
                    { surnameAndName: 'а-2', personalTime: null },
                    { surnameAndName: 'а-3', personalTime: null },
                    { surnameAndName: 'а-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: null },
                    { surnameAndName: 'b-2', personalTime: null },
                    { surnameAndName: 'b-3', personalTime: null },
                    { surnameAndName: 'b-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: null },
                    { surnameAndName: 'c-2', personalTime: null },
                    { surnameAndName: 'c-3', personalTime: null },
                    { surnameAndName: 'c-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
        ];
        const output: TeamCompetitionResult = [
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: null },
                    { surnameAndName: 'а-2', personalTime: null },
                    { surnameAndName: 'а-3', personalTime: null },
                    { surnameAndName: 'а-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: null },
                    { surnameAndName: 'b-2', personalTime: null },
                    { surnameAndName: 'b-3', personalTime: null },
                    { surnameAndName: 'b-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: null },
                    { surnameAndName: 'c-2', personalTime: null },
                    { surnameAndName: 'c-3', personalTime: null },
                    { surnameAndName: 'c-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
        ];
        const sorter = new TeamCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test(('one team has time'), () => {
        const input: TeamCompetitionResult = [
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: null },
                    { surnameAndName: 'а-2', personalTime: null },
                    { surnameAndName: 'а-3', personalTime: null },
                    { surnameAndName: 'а-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: null },
                    { surnameAndName: 'b-2', personalTime: null },
                    { surnameAndName: 'b-3', personalTime: null },
                    { surnameAndName: 'b-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: '2:30' },
                    { surnameAndName: 'c-2', personalTime: '2:45' },
                    { surnameAndName: 'c-3', personalTime: '3:00' },
                    { surnameAndName: 'c-4', personalTime: '2:45' },
                ],
                totalTime: '10:15',
                place: null,
            },
        ];
        const output: TeamCompetitionResult = [
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: '2:30' },
                    { surnameAndName: 'c-2', personalTime: '2:45' },
                    { surnameAndName: 'c-3', personalTime: '3:00' },
                    { surnameAndName: 'c-4', personalTime: '2:45' },
                ],
                totalTime: '10:15',
                place: 1,
            },
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: null },
                    { surnameAndName: 'а-2', personalTime: null },
                    { surnameAndName: 'а-3', personalTime: null },
                    { surnameAndName: 'а-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: null },
                    { surnameAndName: 'b-2', personalTime: null },
                    { surnameAndName: 'b-3', personalTime: null },
                    { surnameAndName: 'b-4', personalTime: null },
                ],
                totalTime: null,
                place: null,
            },
        ];
        const sorter = new TeamCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test(('all teams have time'), () => {
        const input: TeamCompetitionResult = [
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: '3:45' },
                    { surnameAndName: 'а-2', personalTime: '2:00' },
                    { surnameAndName: 'а-3', personalTime: '5:45' },
                    { surnameAndName: 'а-4', personalTime: '3:45' },
                ],
                totalTime: '15:15',
                place: null,
            },
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: '1:45' },
                    { surnameAndName: 'b-2', personalTime: '1:00' },
                    { surnameAndName: 'b-3', personalTime: '1:45' },
                    { surnameAndName: 'b-4', personalTime: '0:45' },
                ],
                totalTime: '5:15',
                place: null,
            },
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: '2:30' },
                    { surnameAndName: 'c-2', personalTime: '2:45' },
                    { surnameAndName: 'c-3', personalTime: '3:00' },
                    { surnameAndName: 'c-4', personalTime: '2:45' },
                ],
                totalTime: '10:15',
                place: null,
            },
        ];
        const output: TeamCompetitionResult = [
            { 
                teamName: 'team-2',
                teamMembers: [
                    { surnameAndName: 'b-1', personalTime: '1:45' },
                    { surnameAndName: 'b-2', personalTime: '1:00' },
                    { surnameAndName: 'b-3', personalTime: '1:45' },
                    { surnameAndName: 'b-4', personalTime: '0:45' },
                ],
                totalTime: '5:15',
                place: 1,
            },
            { 
                teamName: 'team-3',
                teamMembers: [
                    { surnameAndName: 'c-1', personalTime: '2:30' },
                    { surnameAndName: 'c-2', personalTime: '2:45' },
                    { surnameAndName: 'c-3', personalTime: '3:00' },
                    { surnameAndName: 'c-4', personalTime: '2:45' },
                ],
                totalTime: '10:15',
                place: 2,
            },
            { 
                teamName: 'team-1',
                teamMembers: [
                    { surnameAndName: 'а-1', personalTime: '3:45' },
                    { surnameAndName: 'а-2', personalTime: '2:00' },
                    { surnameAndName: 'а-3', personalTime: '5:45' },
                    { surnameAndName: 'а-4', personalTime: '3:45' },
                ],
                totalTime: '15:15',
                place: 3,
            },
        ];
        const sorter = new TeamCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });
});