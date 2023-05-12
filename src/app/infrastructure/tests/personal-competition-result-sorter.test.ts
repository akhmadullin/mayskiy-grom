import { PersonalCompetitionResult } from '../../domain/personal-competition-result';
import { PersonalCompetitionResultSorter } from '../personal-competition-result-sorter';

describe('PersonalCompetitionResultSorter - class, that defines places and sort data by place', () => {
    test(('no one has time'), () => {
        const input: PersonalCompetitionResult = [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
        ];
        const output: PersonalCompetitionResult =  [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
        ];
        const sorter = new PersonalCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test('some people have time, others not, no fails', () => {
        const input: PersonalCompetitionResult = [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '5:01', fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '3:02', fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '4:12', fail: null, place: null },
        ];
        const output: PersonalCompetitionResult = [
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '3:02', fail: null, place: 1 },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '4:12', fail: null, place: 2 },
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '5:01', fail: null, place: 3 },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
        ];
        const sorter = new PersonalCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test('some people have time, others not, with fails', () => {
        const input: PersonalCompetitionResult = [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '5:01', fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '3:02', fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '4:12', fail: 'снятие', place: null },
            { startNumber: 6, person: 'person-6', team: 'team-2', time: '7:15', fail: 'снятие', place: null },
            { startNumber: 7, person: 'person-7', team: 'team-2', time: '3:30', fail: 'снятие', place: null },
        ];
        const output: PersonalCompetitionResult = [
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '3:02', fail: null, place: 1 },
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '5:01', fail: null, place: 2 },
            { startNumber: 7, person: 'person-7', team: 'team-2', time: '3:30', fail: 'снятие', place: 3 },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '4:12', fail: 'снятие', place: 4 },
            { startNumber: 6, person: 'person-6', team: 'team-2', time: '7:15', fail: 'снятие', place: 5 },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: null, fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: null, fail: null, place: null },
        ];
        const sorter = new PersonalCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test('some people have time, others not, with fails, some people have equal time', () => {
        const input: PersonalCompetitionResult = [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '1:02', fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: '1:01', fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: '5:05', fail: 'снятие', place: null },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '1:01', fail: null, place: null },
            { startNumber: 6, person: 'person-6', team: 'team-3', time: null, fail: null, place: null },
            { startNumber: 7, person: 'person-7', team: 'team-3', time: null, fail: null, place: null },
            { startNumber: 8, person: 'person-8', team: 'team-3', time: '6:06', fail: 'снятие', place: null },
            { startNumber: 9, person: 'person-9', team: 'team-4', time: '5:05', fail: 'снятие', place: null },
            { startNumber: 10, person: 'person-10', team: 'team-4', time: '5:05', fail: 'снятие', place: null },
        ];
        const output: PersonalCompetitionResult = [
            { startNumber: 2, person: 'person-2', team: 'team-1', time: '1:01', fail: null, place: 1 },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '1:01', fail: null, place: 2 },
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '1:02', fail: null, place: 3 },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: '5:05', fail: 'снятие', place: 4 },
            { startNumber: 9, person: 'person-9', team: 'team-4', time: '5:05', fail: 'снятие', place: 5 },
            { startNumber: 10, person: 'person-10', team: 'team-4', time: '5:05', fail: 'снятие', place: 6 },
            { startNumber: 8, person: 'person-8', team: 'team-3', time: '6:06', fail: 'снятие', place: 7 },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: null, fail: null, place: null },
            { startNumber: 6, person: 'person-6', team: 'team-3', time: null, fail: null, place: null },
            { startNumber: 7, person: 'person-7', team: 'team-3', time: null, fail: null, place: null },
        ];
        const sorter = new PersonalCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });

    test('all people have time, some with fails, some people have equal time', () => {
        const input: PersonalCompetitionResult = [
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '1:02', fail: null, place: null },
            { startNumber: 2, person: 'person-2', team: 'team-1', time: '1:01', fail: null, place: null },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '1:20:05', fail: null, place: null },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: '5:05', fail: 'снятие', place: null },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '1:01', fail: null, place: null },
            { startNumber: 6, person: 'person-6', team: 'team-3', time: '3:27', fail: 'снятие', place: null },
            { startNumber: 7, person: 'person-7', team: 'team-3', time: '4:46', fail: null, place: null },
            { startNumber: 8, person: 'person-8', team: 'team-3', time: '6:06', fail: 'снятие', place: null },
            { startNumber: 9, person: 'person-9', team: 'team-4', time: '5:05', fail: 'снятие', place: null },
            { startNumber: 10, person: 'person-10', team: 'team-4', time: '5:05', fail: 'снятие', place: null },
        ];
        const output: PersonalCompetitionResult = [
            { startNumber: 2, person: 'person-2', team: 'team-1', time: '1:01', fail: null, place: 1 },
            { startNumber: 5, person: 'person-5', team: 'team-2', time: '1:01', fail: null, place: 2 },
            { startNumber: 1, person: 'person-1', team: 'team-1', time: '1:02', fail: null, place: 3 },
            { startNumber: 7, person: 'person-7', team: 'team-3', time: '4:46', fail: null, place: 4 },
            { startNumber: 3, person: 'person-3', team: 'team-2', time: '1:20:05', fail: null, place: 5 },
            { startNumber: 6, person: 'person-6', team: 'team-3', time: '3:27', fail: 'снятие', place: 6 },
            { startNumber: 4, person: 'person-4', team: 'team-2', time: '5:05', fail: 'снятие', place: 7 },
            { startNumber: 9, person: 'person-9', team: 'team-4', time: '5:05', fail: 'снятие', place: 8 },
            { startNumber: 10, person: 'person-10', team: 'team-4', time: '5:05', fail: 'снятие', place: 9 },
            { startNumber: 8, person: 'person-8', team: 'team-3', time: '6:06', fail: 'снятие', place: 10 },
        ];
        const sorter = new PersonalCompetitionResultSorter();
        expect(sorter.sortAndDefinePlaces(input)).toEqual(output);
    });
});