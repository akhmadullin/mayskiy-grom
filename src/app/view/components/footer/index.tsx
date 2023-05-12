import React, { FC } from 'react';

const logo = new URL('../../../../assets/mg-logo.svg', import.meta.url);
const logoDark = new URL('../../../../assets/mg-logo-dark.svg', import.meta.url);

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="content-wrapper">
                <div className="footer__content">
                    <picture>
                        <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
                        <img src={logo} className="footer__logo" alt="Майский гром" />
                    </picture>
                    <div className="footer__content__text">
                        <p>Первенство города Владивостока по&nbsp;спортивному&nbsp;туризму</p>
                        <p>13 мая 2023 г.</p>
                        <p>Почта для связи - <a href="mailto:club-vibram@mail.ru">club-vibram@mail.ru</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
