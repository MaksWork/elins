import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Contacts.scss';

import { useTranslation, Trans } from 'react-i18next';

const Contacts = () => {
	const {t, i18n} = useTranslation();
	
	return(
		<div id='contacts_field'>
			<div id='contacts_cont'>
				<h1>{t('contacts.label')}</h1>
				<hr/>
				<div id='main_label'>
					<h3 className='bold_text'>{t('contacts.sia')}</h3>
					<span>
						<span><b>{t('contacts.phone')}:</b> <a href='tel: +371 28 356 231'>+371 28 356 231</a></span>
						<span><b >{t('contacts.mail')}:</b> <a href='elinssia@inbox.lv'>elinssia@inbox.lv</a></span>
					</span>
					<span>
						<span><b>{t('contacts.working_hours.title')}:</b></span>
						<span>{t('contacts.working_hours.weekdays')}: <b>9.00–18.00</b></span>
						<span>{t('contacts.working_hours.weekend')}</span>
					</span>
					<span>
						<span><b>{t('contacts.adress.title')}:</b></span>
						<span>{t('contacts.adress.adress')}</span>
					</span>
					<span>
						<span><b>{t('contacts.props.title')}:</b></span>
						<span><b>{t('contacts.props.reg_num')}:</b> 40003768798 </span>
						<span><b>{t('contacts.props.legal_adrs')}:</b> Sarkandaugavas iela 26 k-6 - 337,</span>
						<span>Rīga, LV-1005</span>
						<span><b>{t('contacts.props.bank.title')}:</b> AS Swedbanka, HABALV22 </span>
						<span><b>{t('contacts.props.bank.account_num')}:</b> LV51HABA0551011091340 </span>
					</span>
					
				</div>
				<form id='contact_input'>
					<label>{t('contacts.props.input.name')}</label>
					<input/>
					<label>{t('contacts.props.input.mail')}</label>
					<input/>
					<label>{t('contacts.props.input.phone')}</label>
					<input/>
					<label>{t('contacts.props.input.your_msg')}</label>
					<textarea/>
					<ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} hl={t('contacts.props.input.captcha_hl')}/>
					<input id='submit' type='button' value={t('contacts.props.input.send')} />
				</form>
			</div>
		</div>
	)
}
export default Contacts