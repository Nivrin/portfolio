import React from 'react';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ConnectButton = () => {
    const handleConnectButtonClick = () => {
        window.location.href = 'mailto:nivrimn@gmail.com';
    };

    return (
        <button onClick={handleConnectButtonClick}> Let's talk ✉️<ArrowRightCircle size={25} /></button>
    );
};
