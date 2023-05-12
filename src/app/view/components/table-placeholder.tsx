import React, { FC, ReactElement } from 'react';

interface TablePlaceholderProps {
    placeholderText: string;
    isAnimated: boolean; 
}

const TablePlaceholder: FC<TablePlaceholderProps> = ({ isAnimated, placeholderText }) => {
    return (
        <div className="table-placeholder">
            {placeholderText && (
                <p>
                    {placeholderText}
                </p>
            )}
            {isAnimated && <div className="lds-dual-ring" />}
        </div>
    );
};

export default TablePlaceholder;
