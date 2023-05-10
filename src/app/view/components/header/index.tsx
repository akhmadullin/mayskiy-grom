import React, { FC } from 'react';
import Logo from './logo';
import Navigation from './navigation';

const Header: FC = () => {
    return (
        <header className="header content-wrapper">
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
