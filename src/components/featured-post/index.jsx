import React from 'react'
import { Link } from 'react-router-dom'

// import  {Link} from 'react-router-dom' //tira o efeito de refres da pagina

import AuthorProfile from '../author-profile'

import '../featured-post/styles.css'



export default function FeaturedPost({post}){

  
    return(
    
            <div className='featured-post-container'> 

            <div>

            <img className='featured-post-imagem' src={post.image}></img>
            {/* https://images.squarespace-cdn.com/content/v1/57a11afbb8a79ba519c8975f/1591917204806-RQ0ZU820WST4H21MA2Q2/Untitled+design+-+2020-06-11T150553.962.png?format=750w */}
            </div>
        <div>

        
            <p className='featured-post-date'>{post.date}</p>

            <Link to={'#'}>
            <h2 className='featured-post-title'>
                {post.date}
                </h2>
            </Link>

            <p className='featured-post-description'>
                {post.description}
            </p>
            <AuthorProfile/>
            </div>
            </div>
    
    )
}


