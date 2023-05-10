
import { PersonalCompetitionType } from "../../domain/competition-type";
import useAppSelector from "./use-app-selector";

const usePersonalCompetitionResult = (competitionType: PersonalCompetitionType) => {
    return useAppSelector((state) => state.personalCompetitionResult[competitionType]);
};

export default usePersonalCompetitionResult;
