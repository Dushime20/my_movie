import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,display:"block",  right: "25px", zIndex: 3, transform: "translateY(50%)" }} // Center vertically
            onClick={onClick}
        >
            <FaArrowRight style={{ color: 'white', fontSize: '24px' }} /> // Adjust size and color as needed
        </div>
    );
};

export default NextArrow;
