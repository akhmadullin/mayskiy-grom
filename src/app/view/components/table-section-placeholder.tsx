import React, { FC } from 'react';
import TablePlaceholder from './table-placeholder';

export interface TableSectionPlaceholderProps {
    title: string;
    placeholderText?: string;
    isAnimated?: boolean; 
};

const TableSectionPlaceholder: FC<TableSectionPlaceholderProps> = ({ title, placeholderText = '', isAnimated = false  }) => {
    return (
        <section>
            <div className="content-wrapper mb-15">
                <h3>
                    {title}
                </h3>
            </div>
            <div className="content-wrapper">
                <TablePlaceholder isAnimated={isAnimated} placeholderText={placeholderText} />
            </div>
        </section>
    );
};

export default TableSectionPlaceholder;
