import React, {useState, useEffect} from 'react'



import FeaturedPost from '../../components/featured-post';

import PostList from '../../components/post-list'




const allpost = [

    {
            image:"https://1.bp.blogspot.com/-Y5_GqisHPZg/YIW7LGN8eYI/AAAAAAAAfao/RDtdF8GT-nMQPDyz_770EaLNkkO9ozzEACLcBGAsYHQ/s1089/nier-replicant-ver1.22-capa.jpg",
            date:"18/12/2023",
            title:"titulo de texte",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi nostrum eveniet, quod quos esse recusandae maiores deserunt dignissimos odioperferendis molestiae, quisquam provident voluptas similique veritatis debitis quidem? Corrupti, accusantium.,"



    },
    {
        image:"https://i.pinimg.com/736x/44/73/52/447352f095bd28eed111f7e50524199d.jpg",
        date:"18/12/2023",
        title:"Segundo title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi nostrum eveniet, quod quos esse recusandae maiores deserunt dignissimos odioperferendis molestiae, quisquam provident voluptas similique veritatis debitis quidem? Corrupti, accusantium.,"

},
{
    image:"https://i.pinimg.com/736x/44/73/52/447352f095bd28eed111f7e50524199d.jpg",
    date:"",
    title:"",
    description:"",

},
{
image:"https://i.pinimg.com/736x/44/73/52/447352f095bd28eed111f7e50524199d.jpg",
date:"",
title:"",
description:"",

},
{
image:"https://i.pinimg.com/736x/44/73/52/447352f095bd28eed111f7e50524199d.jpg",
date:"",
title:"",
description:"",

}

]

export default function Home(){
   
   async function getPosts(){
    
    const response = await fetch(); // faz o retorno dos dados

    const data = await response.json();

    console.log(data)

    setpost(data.data)

   }

    const [post, setpost] = useState(allpost)
  
    useEffect(() =>{

        setpost([0]);

    }, [] )

    return( 

        <div>
        {

                post && post.length >0 && <FeaturedPost post={allpost[0]}></FeaturedPost>

                // Cria uma requisição para identificar se post existe

        }

        
        
       <PostList post={allpost}></PostList>
        </div>
    );
  
}


