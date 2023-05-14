import React, { FC, ReactElement } from 'react';

interface TablePlaceholderProps {
    placeholderText: string;
    isAnimated: boolean; 
    placeholderHeight?: string;
}

const TablePlaceholder: FC<TablePlaceholderProps> = ({ isAnimated, placeholderText, placeholderHeight }) => {
    return (
        <div style={placeholderHeight ? { height: placeholderHeight } : undefined} className="table-placeholder">
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
