import React from 'react';
import '../../assets/css/Alert.css';

function Alert({ message, type = 'info', onClose }) {
    return (
        <div className={`custom-alert ${type}`}>
            <div className="alert-content">
                <p>{message}</p>
                <button onClick={onClose} className="close-button">
                    ×
                </button>
            </div>
        </div>
    );
}

export default Alert;