import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Fotos from './Fotos'
import Contacts from './Contacts'
import Map from './Map'
import Footer from '../UI/Footer/Footer'

const MainField = () => {
	return(
		<div id='main_field'>
			<Navbar/>
			<About/>
			<Fotos/>
			<Contacts/>
			<Map/>
			<Footer/>
		</div>
	)
}
export default MainField