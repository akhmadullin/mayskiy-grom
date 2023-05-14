import React, { FC } from 'react';

const IntroSection: FC = () => {
    return (
        <section className="into-section content-wrapper">
            <h1 className="into-section__title mb-15">Майский гром</h1>
            <p className="info-section__subtitle centered-text mb-30">Первенство города Владивостока по&nbsp;спортивному&nbsp;туризму</p>
            <div className="into-section__button-row">
                <a href="#group-a" className="green-button">Результаты</a>
                <a href="#photo-gallery" className="black-button">Фотоотчет</a>
            </div>
        </section>
    );
};

export default IntroSection;
