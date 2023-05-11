import React, { FC } from 'react';

const logo = new URL('../../../../assets/mg-logo.svg', import.meta.url);

const Logo: FC = () => {
    return (
        <div className="header__logo__container">
            <img src={logo} className="header__logo" alt="Майский гром" />
        </div>
    );
};

export default Logo;
