import React, { FC } from 'react';

interface TablePlaceholderProps {
    placeholderText: string;
    isAnimated: boolean; 
}

const TablePlaceholder: FC<TablePlaceholderProps> = ({ isAnimated, placeholderText }) => {
    return (
        <div className={`table-placeholder ${isAnimated ? 'table-placeholder_animated' : ''}`}>
            {placeholderText}
        </div>
    );
};

export default TablePlaceholder;
