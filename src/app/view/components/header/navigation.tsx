import React, { FC } from 'react';

interface Link {
    caption: string;
    url: string;
}

const links: Link[] = [
    {
        caption: 'Группа A',
        url: '#group-a',
    },
    {
        caption: 'Группа B',
        url: '#group-b',
    },
];

const Navigation: FC = () => {
    return (
        <nav className="navigation">
            <ul>
                {links.map(({ caption, url }) => {
                    return (
                        <li key={url}>
                            <a href={url}>{caption}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
