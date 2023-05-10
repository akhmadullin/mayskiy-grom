import React, { FC } from 'react';
import Logo from './logo';
import Navigation from './navigation';

const Header: FC = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
