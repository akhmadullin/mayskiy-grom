import React, { FC, Fragment } from 'react';
import { TeamCompetitionResult, TEAM_MEMBERS_COUNT } from '../../../../domain/team-competition-result';

interface TeamCompetitionResultTableProps {
    data: TeamCompetitionResult;
}

// Команда 	Участники 	Беговое время (личка)	Общее время	Место 


const tableHeadeings = {
    place: 'Место',
    teamName: 'Команда',
    totalTime: 'Общее время',
    teamMembers: 'Участники',
    teamMemebrsPersonalTime: 'Беговое время (личка)',
};
const tableHeadeingsList = Object.values(tableHeadeings);

const TeamCompetitionResultTable: FC<TeamCompetitionResultTableProps> = ({ data }) => {
    return (
        <div className="table-wrapper">
            <div className="table-wrapper__scroll-padding_left" />
            <table className="table">
                <thead>
                    <tr>
                        {tableHeadeingsList.map((heading) => {
                            return (
                                <th key={heading}>
                                    {heading}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ teamName, teamMembers, totalTime, place }) => {
                        const [firstTeamMember, ...otherTeamMembers] = teamMembers;
                        return (
                            <Fragment key={`${teamName}-${place}`}>
                                <tr>
                                    <td rowSpan={TEAM_MEMBERS_COUNT}>
                                        {place}
                                    </td>
                                    <td rowSpan={TEAM_MEMBERS_COUNT}>
                                        {teamName}
                                    </td>
                                    <td rowSpan={TEAM_MEMBERS_COUNT}>
                                        {totalTime}
                                    </td>
                                    <td>
                                        {firstTeamMember.surnameAndName}
                                    </td>
                                    <td>
                                        {firstTeamMember.personalTime}
                                    </td>
                                </tr>
                                {otherTeamMembers.map(({ surnameAndName, personalTime  }) => {
                                    return (
                                        <tr key={`${teamName}-${surnameAndName}`}>
                                            <td>{surnameAndName}</td>
                                            <td>{personalTime}</td>
                                        </tr>
                                    )
                                })}
                            </Fragment>

                        );
                    })}
                </tbody>
            </table>
            <div className="table-wrapper__scroll-padding_right" />
        </div>
    );
};

export default TeamCompetitionResultTable;
