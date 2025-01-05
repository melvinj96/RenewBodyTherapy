import React from 'react';
import '../../assets/css/LoadingSpinner.css';

function LoadingSpinner() {
    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
        </div>
    );
}

export default LoadingSpinner;