import { TeamCompetitionResultSorterInterface } from "../application/team-competition-result-sorter";
import { TeamCompetitionResult } from "../domain/team-competition-result";
import timestringToSecondNumber from "./time-string-to-second-number";

export class TeamCompetitionResultSorter implements TeamCompetitionResultSorterInterface {
    public sortAndDefinePlaces(data: TeamCompetitionResult): TeamCompetitionResult {
        const withTime = data.filter((item) => item.totalTime !== null);
        const withoutTime = data.filter((item) => item.totalTime === null);

        return [
            ...this.sortDataByTime(withTime),
            ...withoutTime,
        ].map((item, idx) => {
            if (item.totalTime === null) {
                return item;
            }
            return {
                ...item,
                place: idx + 1,
            };
        });
    }

    private sortDataByTime(data: TeamCompetitionResult): TeamCompetitionResult {
        const arr = [...data];
        return arr.sort((a, b) => {
            const aSeconds = timestringToSecondNumber(a.totalTime!);
            const bSeconds = timestringToSecondNumber(b.totalTime!);
            if (aSeconds > bSeconds) {
                return 1;
            }
            if (aSeconds === bSeconds) {
                return 0;
            }
            if (aSeconds < bSeconds) {
                return -1;
            }
            return 0;
        });
    } 
}