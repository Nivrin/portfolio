import React, { useState } from "react";
import linkedinIcon from '../assets/img/nav-icon1.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import mailIcon from '../assets/img/email-svgrepo-com.svg';
import phoneIcon from '../assets/img/phone-icon.png';

import './SocialButtons.css'; 

const SocialButtons = () => {
    const [showCopiedNotification, setShowCopiedNotification] = useState(false);

    const handleConnectButtonClick = () => {
        window.location.href = 'mailto:nivrimn@gmail.com';
    };

    const handlePhoneClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = "tel:+972586490590"; 
        } else {
            navigator.clipboard.writeText("+972586490590");
            setShowCopiedNotification(true);
            setTimeout(() => {
                setShowCopiedNotification(false);
            }, 2000); // Hide notification after 2 seconds
        }
    };

    return (
        <div className="social-icon"> 
            <a href="https://www.linkedin.com/in/niv-rimon/"><img src={linkedinIcon} alt="linkedin-icon" /></a>
            <a href="https://www.facebook.com/niv.rimon"><img src={facebookIcon} alt="facebook-icon" /></a>
            <a href="#email" onClick={handleConnectButtonClick}> <img src={mailIcon} alt="mail-icon" /></a>
            <a href="#phone" onClick={handlePhoneClick}><img src={phoneIcon} alt="call-me" /></a>
            {showCopiedNotification && <div className="copied-notification">Phone number copied!</div>}
        </div>
    );
};

export default SocialButtons;
