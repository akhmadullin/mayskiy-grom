import React, { FC } from 'react';
import { PersonalCompetitionResult, PersonalCompetitionResultItem } from '../../../../domain/personal-competition-result';

interface PersonalCompetitionResultTableProps {
    data: PersonalCompetitionResult;
}

// Порядок старта 	ФИ	Команда 	Беговое время 	Снятие 	Место 


const tableHeadeings: Record<keyof PersonalCompetitionResultItem, string> = {
    startNumber: 'Порядок старта',
    person: 'Фамилия Имя',
    team: 'Команда',
    time: 'Беговое время',
    fail: 'Снятие',
    place: 'Место',
};
const tableHeadeingsList = Object.values(tableHeadeings);

const PersonalCompetitionResultTable: FC<PersonalCompetitionResultTableProps> = ({ data }) => {
    return (
        <div className="table-wrapper">
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
                    {data.map(({ startNumber, person, team, time, fail, place }) => {
                        return (
                            <tr key={startNumber}>
                                <td>{startNumber}</td>
                                <td>{person}</td>
                                <td>{team}</td>
                                <td>{time}</td>
                                <td>{fail}</td>
                                <td>{place}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PersonalCompetitionResultTable;
