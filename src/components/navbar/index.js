import React from 'react'

import  {Link} from 'react-router-dom' //tira o efeito de refres da pagina

import styles from '../navbar/styles.css'



export default function NavBar(){

  
    return(
    
    <nav className='navbar'>

    <div>

       <Link className='logo' href='/'>

        <h3 >Meu blog</h3>
       </Link>

    </div>

    <div>
            <Link className='nav-link' to='/'>Home</Link>
            
            <Link className='nav-link' to='/post'>Sobre</Link>
            
            <Link className='nav-link' to='/contact'>Contato</Link>
           
            <Link className='nav-link' to='/Culture'>Culture</Link>

    </div>

    </nav>
    )
}


