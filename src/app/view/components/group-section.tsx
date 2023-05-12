import React, { FC, PropsWithChildren } from 'react';

type GroupSectionProps = PropsWithChildren<{
    title: string;
    description: string;
    id: string;
}>;

const GroupSection: FC<GroupSectionProps> = ({ title, description, id, children }) => {    
    return (
        <section id={id} className="group-section">
            <div className="content-wrapper"> 
                <h2 className="group-section__title">{title}</h2>
                <p className="group-section__description">{description}</p>
            </div>
            <div className="group-section__content">
                {children}
            </div>
        </section>
    );
};

export default GroupSection;    
