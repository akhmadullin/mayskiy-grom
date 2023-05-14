import React, { FC, MutableRefObject } from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import photos from './photos-list';

const PhotoGallery: FC = () => {
    return (
        <div className="gallery">
            <Gallery>
                {photos.map(({ original, thumbnail, thumbnail2x, photoswipeThumbnail, width, height, alt }) => {
                    return (
                        <Item
                            key={original}
                            original={original}
                            thumbnail={photoswipeThumbnail}
                            width={width}
                            height={height}
                        >
                            {({ ref, open }) => (
                                <a 
                                    href={original}
                                    target="_blank"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        open(e);
                                    }}
                                    aria-label={`Фотография "${alt}"`}
                                    className="gallery__thumbnail"
                                >
                                    <img ref={ref as MutableRefObject<HTMLImageElement>} src={thumbnail} srcSet={`${thumbnail} 1x, ${thumbnail2x} 2x`} alt={alt} loading="lazy" className="gallery__thumbnail__img"  />
                                </a>
                            )}
                        </Item>
                    );
                })}
            </Gallery>
        </div>
    );
};

export default PhotoGallery;
