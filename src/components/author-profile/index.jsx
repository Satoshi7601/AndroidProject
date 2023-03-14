import React from 'react'

import imagem from '../../assets/images/futaba.jpg'

import '../author-profile/styles.css'

export default function AuthorProfile(){

  
    return(

        <div>

            <div className='author-profile'>
                
                <img className='author-profile-imagem' src={imagem}></img>
                
               

            <div>
                <h3>Raphael Bellagama</h3>
               
                <p>FDesenvolver Junior</p>
            
                </div>
            </div>
        </div>
    
    )
}


