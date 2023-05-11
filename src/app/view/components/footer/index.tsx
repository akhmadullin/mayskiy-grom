import React, { FC } from 'react';
// import mgLogoUri from '';

const logo = new URL('../../../../assets/mg-logo.svg', import.meta.url);

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="content-wrapper">
                <div className="footer__content">

                <img src={logo} className="footer__logo" alt="Майский гром" />
                <div className="footer__content__text">
                    <p>Первенство города Владивостока по спортивному туризму</p>
                    <p>13 мая 2023 г.</p>
                    <p>Почта для связи - <a href="mailto:club-vibram@mail.ru">club-vibram@mail.ru</a></p>
                </div>
                {/* <div>
                </div> */}
                </div>

                {/* <p>Майский гром</p>
                <p>13 мая 2023 г.</p> */}
            </div>
        </footer>
    );
};

export default Footer;
