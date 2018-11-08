///muestra los datos del artista

import React , {Component} from 'react';
import def from './metal-music.png'
import { Card } from 'antd';

const { Meta } = Card;


class Profile extends Component{
render(){


let artist1 = {name:'',images:[{url:''}], genres:[]};
if(this.props.artist.followers != null){
  artist1 = this.props.artist;
}

  return (      
   <div className='info-artist'>
      <Card className='flex'
    cover={<img
      alt='Profile'
      src={artist1.images[0].url || def }
      style={{ height: 300 }}
    />}
  >
    <Meta
      title={artist1.name}
      
      description={
        
        artist1.genres.map((genre, k)=>{
          genre = genre !== artist1.genres[artist1.genres.length-1]
          ? `${genre},`
          : `${genre}`

          return (
            <span key={k} > {genre} </span>
          )
        })
    }
    />
  </Card>
   </div>
    
  )
}
}

export default Profile;
