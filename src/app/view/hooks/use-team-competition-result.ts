
import { TeamCompetitionType } from "../../domain/competition-type";
import useAppSelector from "./use-app-selector";

const useTeamCompetitionResult = (competitionType: TeamCompetitionType) => {
    return useAppSelector((state) => state.teamCompetitionResult[competitionType]);
};

export default useTeamCompetitionResult;
