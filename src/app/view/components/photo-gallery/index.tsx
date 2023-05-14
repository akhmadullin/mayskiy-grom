import React, { FC } from 'react';
import PhotoGallery from './photo-gallery';

interface PhotoGallerySectionProps {
    id: string;
}

const PhotoGallerySection: FC<PhotoGallerySectionProps> = ({ id }) => {
    return (
        <section id={id} className="photo-gallery-section">
            <div className="content-wrapper">
                <h2 className="photo-gallery-section__title">Фотоотчет</h2>
                <p className="photo-gallery-section__subtitle">Больше фотографий на&nbsp;<a href="https://disk.yandex.ru/d/VIwictnaue_D_g" target='_blank'>Яндекс диске</a></p>
                <PhotoGallery />
            </div>
        </section>
    );
};

export default PhotoGallerySection;
