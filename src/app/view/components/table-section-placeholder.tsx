import React, { FC, ReactElement } from 'react';
import TablePlaceholder from './table-placeholder';

export interface TableSectionPlaceholderProps {
    title: string;
    placeholderText?: string;
    isAnimated?: boolean;
    updateButton: ReactElement;
    placeholderHeight?: string;
};

const TableSectionPlaceholder: FC<TableSectionPlaceholderProps> = ({ title, placeholderText = '', isAnimated = false, updateButton, placeholderHeight  }) => {
    return (
        <section>
            <div className="content-wrapper mb-15">
                <div className="section-title-button-row">
                    <h3>
                        {title}
                    </h3>
                    {updateButton}
                </div>
            </div>
            <div className="content-wrapper">
                <TablePlaceholder isAnimated={isAnimated} placeholderText={placeholderText} placeholderHeight={placeholderHeight} />
            </div>
        </section>
    );
};

export default TableSectionPlaceholder;
