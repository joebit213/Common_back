///muestra las canciones del artista buscado

import React, {Component} from 'react';
import '../../App.css';
import { Card } from 'antd';

const { Meta } = Card;

class Gallery extends Component {
constructor(props){
  super(props);
    this.state={}
  }

  render() {
    const {tracks} = this.props;
    return (
      <div>
        <h2>Canciones</h2>
        {tracks.map((track,k) => {
          console.log('track',track);
          const trackImg=track.album.images[0].url;
        return (
        <div className='tracks-card'>
          <Card 
           
                  key={k}
                  style={{ width: 300 }}
                  cover={<img
                  src={trackImg}
                  alt="track"
                  />}
                >
              <Meta
                title={track.name}
              />
        </Card>
        </div>
          )
         })}
      </div>
    )
  }
}

export default Gallery;
