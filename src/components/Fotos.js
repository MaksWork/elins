import React from 'react';
import '../styles/Fotos.scss'
import gumijas_formas from '../imgs/slide_imgs/gumijas_formas.png'
import elektro_elementi from '../imgs/slide_imgs/elektro_elementi.png'
import gumijas_amortizatori from '../imgs/slide_imgs/gumijas_amortizatori.png'
import gumijas_profili from '../imgs/slide_imgs/gumijas_profili.png'
import keramiskie_izolatori from '../imgs/slide_imgs/keramiskie_izolatori.png'
import termoplasmasas_izolatori from '../imgs/slide_imgs/termoplasmasas_izolatori.png'
import atsperes from '../imgs/slide_imgs/atsperes.png'
import atsperes_2 from '../imgs/slide_imgs/atsperes_2.png'
import lielas_atsperes from '../imgs/slide_imgs/lielas_atsperes.png'
import plastmasa from '../imgs/slide_imgs/plastmasas_izstradajumi.png'
import sild_elementi from '../imgs/slide_imgs/sild_elementi.png'
import stiepes from '../imgs/slide_imgs/stiepes.png'

import { useTranslation } from 'react-i18next'

const Fotos = () => {
	const {t, i18n} = useTranslation();
	
	return(
		<div id='fotos_field'>
			<div id='fotos_cont'>
				<label>{t('production.label')}</label>
				<hr/>
				<div id='fotos_grid'>
					<img alt='' src={gumijas_formas}/>
					<img alt='' src={elektro_elementi}/>
					<img alt='' src={gumijas_amortizatori}/>
					<img alt='' src={gumijas_profili}/>
					<img alt='' src={keramiskie_izolatori}/>
					<img alt='' src={termoplasmasas_izolatori}/>
					<img alt='' src={atsperes}/>
					<img alt='' src={atsperes_2}/>
					<img alt='' src={lielas_atsperes}/>
					<img alt='' src={plastmasa}/>
					<img alt='' src={sild_elementi}/>
					<img alt='' src={stiepes}/>
				</div>
			</div>
		</div>
	)
}
export default Fotos