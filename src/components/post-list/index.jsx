import React, {useState, useEffect} from  'react'

import '../post-list/styles.css'

import Post from '../../components/post'

export default function PostList({ post }){


  
    return( 

        <div className='Prost-List-Container'>
        
        {
         post &&  post.map(post => {
                    return<Post post ={post}></Post>;

            }) //passa pelo array chamando o post
        }    
    
        </div>
    );
  
}


