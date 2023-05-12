import React, { FC } from 'react';
import { PersonalCompetitionResult, PersonalCompetitionResultItem } from '../../../../domain/personal-competition-result';

interface PersonalCompetitionResultTableProps {
    data: PersonalCompetitionResult;
}

// Порядок старта 	ФИ	Команда 	Беговое время 	Снятие 	Место 


const tableHeadeings: Record<keyof PersonalCompetitionResultItem, string> = {
    place: 'Место',
    person: 'Фамилия Имя',
    team: 'Команда',
    time: 'Беговое время',
    startNumber: 'Порядок старта',
    fail: 'Снятие',
};
const tableHeadeingsList = Object.values(tableHeadeings);

const PersonalCompetitionResultTable: FC<PersonalCompetitionResultTableProps> = ({ data }) => {
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
                    {data.map(({ startNumber, person, team, time, fail, place }) => {
                        return (
                            <tr key={startNumber}>
                                <td>{place}</td>
                                <td>{person}</td>
                                <td>{team}</td>
                                <td>{time}</td>
                                <td>{startNumber}</td>
                                <td>{fail}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="table-wrapper__scroll-padding_right" />
        </div>
    );
};

export default PersonalCompetitionResultTable;
