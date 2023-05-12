import { PersonalCompetitionResultSorterInterface } from "../application/personal-competition-result-sorter";
import { PersonalCompetitionResult } from "../domain/personal-competition-result";
import timestringToSecondNumber from './time-string-to-second-number';

// const timestringToSecondNumber = (time: string): number => {
//     return 0;
// };

export class PersonalCompetitionResultSorter implements PersonalCompetitionResultSorterInterface {
    public sortAndDefinePlaces(data: PersonalCompetitionResult): PersonalCompetitionResult {
        const withTimeAndWithoutFail = data.filter((item) => item.time !== null && item.fail === null);
        const withTimeAndWithFail = data.filter((item) => item.time !== null && item.fail !== null);
        const withoutTime = data.filter((item) => item.time === null );

        return [
            ...this.sortDataByTime(withTimeAndWithoutFail),
            ...this.sortDataByTime(withTimeAndWithFail),
            ...withoutTime,
        ].map((item, idx) => {
            if (item.time === null) {
                return item;
            }
            return {
                ...item,
                place: idx + 1,
            };
        })
    }

    private sortDataByTime(data: PersonalCompetitionResult): PersonalCompetitionResult {
        const arr = [...data];
        return arr.sort((a, b) => {
            const aSeconds = timestringToSecondNumber(a.time!);
            const bSeconds = timestringToSecondNumber(b.time!);
            if (aSeconds > bSeconds) {
                return 1;
            }
            if (aSeconds === bSeconds) {
                if (a.startNumber > b.startNumber) return 1;
                if (a.startNumber === b.startNumber) return 0;
                if (a.startNumber < b.startNumber) return -1;
            }
            if (aSeconds < bSeconds) {
                return -1;
            }
            return 0;
        });
    }
}