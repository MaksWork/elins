import React, { useState } from 'react';

const DropDown = () => {
    const languages = [
        'LV',
        'RU'
    ]
    
    let [lang, setLang] = useState('LV');
    let [isOpenDropDown, setOpen] = useState(true)

    
    let drop_func = () =>{
        let drop_content = document.getElementsByClassName('drop_content')[0];
        if(drop_content.style.display == 'none'){
            drop_content.style.display = 'block';
            setOpen(false)
        }
        else{
            drop_content.style.display = 'none';
            setOpen(true)
        }
    }
    
    return(
        <div id='dropdown'> 
            <div onClick={() => drop_func()} id='dropbtn'>
                {lang}
                
                {
                    isOpenDropDown ? 
                        <i class="fa-solid fa-chevron-down"></i> : 
                        <i class="fa-solid fa-chevron-up"></i>
                }
                
                <div className='drop_content'>
                    <a>RU</a> 
                </div>
            </div>
            
        </div>
    );
}

export default DropDown;