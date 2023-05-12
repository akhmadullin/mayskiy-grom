import React, { FC } from 'react';
import GrayButton from './gray-button';

const arrowIcon = new URL('../../../assets/update-arrow.svg', import.meta.url);

interface UpdateButtonProps {
    isFetching: boolean;
    updateData: () => void;
}

const UpdateButton: FC<UpdateButtonProps> = ({ isFetching, updateData }) => {
    return (
        <GrayButton disabled={isFetching} onClick={updateData} title="Обновить данные" ariaLabel="Обновить данные">
            <img src={arrowIcon} style={{ width: '16px', height: '16px' }} alt="Круглая стрелка" />
        </GrayButton>
    );
};

export default UpdateButton;
