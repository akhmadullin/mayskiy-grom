import React, { FC } from 'react';

const logo = new URL('../../../../assets/mg-logo.svg', import.meta.url);
const logoDark = new URL('../../../../assets/mg-logo-dark.svg', import.meta.url);

const Logo: FC = () => {
    return (
        <div className="header__logo__container">
            <picture>
                <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
                <img src={logo} className="header__logo" alt="Майский гром" />
            </picture>
        </div>
    );
};

export default Logo;
