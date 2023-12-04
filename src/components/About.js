import React from 'react'
import '../styles/About.scss'
import mini_logo from '../imgs/logo.png'
import { useTranslation } from 'react-i18next'

const About = () => {
	const {t, i18n} = useTranslation();
	return(
		<div id='about_field'>
			<div id='about_cont'>
				<h1>{t('manufacturing.label')}</h1>
				<hr/>
				<div className='label_cont'>
					<label>{t('manufacturing.titled.t_1')}</label>
					<label>{t('manufacturing.titled.t_2')}</label>
					<label>{t('manufacturing.titled.t_3')}</label>
				</div>
				<div id='do_list_cont'>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_1')}</label>
					</div>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_2')}</label>
					</div>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_3')}</label>
					</div>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_4')}</label>
					</div>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_5')}</label>
					</div>
					<div className='do_list_el'>
						<img alt='' src={mini_logo}/>
						<label>{t('manufacturing.do_list.d_6')}</label>
					</div>

				</div>
			</div>
		</div>
	)
}
export default About