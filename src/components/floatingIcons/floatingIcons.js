import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './floatingIcons.css';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const FloatingIcons = () => {
    return (
        <div class="fixed-social">
            <a href="#" className="fixed-facebook" target="_blank">
                <FontAwesomeIcon icon={brands('facebook')} />
                <span>Facebook</span>
            </a>
            <a href="#" className="fixed-whatsapp" target="_blank">
                <FontAwesomeIcon icon={brands('whatsapp')} />
                <span>WhatsApp</span>
            </a>
            <a href="#" className="fixed-instagrem" target="_blank">
                <FontAwesomeIcon icon={brands('instagram')} />
                <span>Instagram</span></a>
        </div>
    )
}
export default FloatingIcons;

