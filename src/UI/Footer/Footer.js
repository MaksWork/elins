import React from 'react';
import "./Footer.scss";
import zl from '../../imgs/zl_lv_logo.png'
import maps from '../../imgs/google_maps_logo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation();
    
    return(
        <div id='footer_cont'>
            <div id='footer_label_cont'>
                <label>© SIA "Eliņš", 2017 - 2023</label><br/>
                <label>{t('footbar.politics')}</label>
            </div>
            <div id='footer_links_cont'>
                <a href='https://infolapa.zl.lv/elins-sia/'><img src={zl} alt=''/></a>
                <a href='https://www.google.com/maps/place/Elins+,+SIA/@56.9829166,24.2540986,15z/data=!4m5!3m4!1s0x0:0xf6b51be538d0ec14!8m2!3d56.9829166!4d24.2540986'><img src={maps} alt=''/></a>
            </div>
        </div>
    );
}

export default Footer;