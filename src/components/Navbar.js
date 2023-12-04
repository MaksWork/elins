import React, { useEffect } from 'react'
import DropDown from '../UI/DropDown/DropDown'
import '../styles/Navbar.scss'
import logo from '../imgs/elins logo.png'
import logo2 from '../imgs/elins_logo2.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => { 
	const {t, i18n} = useTranslation();
	const scroll = (y) =>{
		window.scrollTo({
			top:y,
			left:0,
			behavior:'smooth'
		})
	}
	return(
		<div id='navbar_cont'>
			<div className='sticky'>
				<ul>
					<li id='logo_navbar'><img src={logo2}/></li>
					<li><input type="button" value={t('navbar.manufacturing')} onClick={() => scroll(300)}/></li>
					<li><input type="button" value={t('navbar.production')} onClick={() => scroll(900)}/></li>
					<li><input type="button" value={t('navbar.contacts')} onClick={() => scroll(1600)}/></li>
					<li><DropDown/></li>
				</ul>
			</div>
		</div>
	)

}
export default Navbar