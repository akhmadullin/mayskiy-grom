import React, { FC, PropsWithChildren } from 'react';

type GrayButtonProps = PropsWithChildren<{
    disabled?: boolean;
    onClick?: () => void;
    title?: string;
    ariaLabel?: string;
    className?: string;
}>;

const GrayButton: FC<GrayButtonProps> = ({ disabled = false, onClick, title, ariaLabel, className = '', children }) => {
    return (
        <button 
            type="button" 
            disabled={disabled}
            onClick={onClick}
            title={title}
            aria-label={ariaLabel}
            className={`gray-button ${className}`}
        >
            {children}
        </button>
    );
};

export default GrayButton;
