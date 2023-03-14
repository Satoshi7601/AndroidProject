import React from 'react'
import { Link } from 'react-router-dom'

// import  {Link} from 'react-router-dom' //tira o efeito de refres da pagina

import '../post/styles.css'



export default function post({ post}){

  
    return(
    
            <div className='post-container'> 

            <div>

            <img className='post-imagem' src={post.image}></img>
            
            </div>
        <div>

        
            <p className='post-date'>{post.date}</p>

            <Link to={'#'}>
            <p className='post-title'>
            {post.title} </p>
            </Link>

            <p className='post-description'>
                   {post.description}
            </p>
           
            </div>
            </div>
    
    )
}


