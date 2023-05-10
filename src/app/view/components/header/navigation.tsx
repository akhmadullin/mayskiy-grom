import React, { FC } from 'react';

interface Link {
    caption: string;
    url: string;
}

const links: Link[] = [
    {
        caption: 'Группа А',
        url: '#group-a',
    },
    {
        caption: 'Группа Б',
        url: '#group-b',
    },
];

const Navigation: FC = () => {
    return (
        <nav>
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
