import React, {Component} from 'react';
import '../../App.css';
import Profile from './Profile';
import Gallery from './Gallery';
import { Input } from 'antd';


class Inicio extends Component{

    constructor(props){
        super(props);
        this.state={
          query:'',
          artist:null,
          tracks:[],
        }
      }

      ///pedir informacion a la api de spotify mediante la busqueda

      search(){
      
        const BASE_URL='https://api.spotify.com/v1/search?';
        let FETCH_URL =BASE_URL+'q='+this.state.query
        +'&type=artist&limit=1';

        ///lo que escribio el usuario en el input de busqueda
        console.log(this.state.query)

       const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

       ///este token se obtiene con el back de inicio de sesion a spotify (iene tiempo de caducidad)
       const auth_token = 'Bearer BQDDDEZhIQMlXs4SgSL0DmIqW6vcJZM0IZ4Z-3ARNIHSWlVp_wq2YA5xyXHqiE9gv8FPeDpJDD4DFVgdzoZ857_fI_8erPowPdZZ7cKCozr9uEXkeM0CPI2MuEkjRYGbmrGVcf7YwDc0n18akmHVbaPXOEgr4yqA&refresh_token=AQC5UcvU9qRjvxENuJcx3FGPCeezGBxlZRs2pyb00QZ_2Cvoe0tBPTpCq03Z7P4mPId7cGukM-UTsRyJ13tSzvDS5GoGaO4g0Ow34E8G8SO1NAYzQUmFGtXG3sFddk-7M0eE3Q';
      

      ///autorizacion mediante token
        fetch(FETCH_URL,{
          method:'GET',
          headers: {
            'Content-Type' :'application/json',
            'Authorization': auth_token,
            },
          mode: 'cors',
          cache:'default'
        })
      
        ///trae los datos que se pidieron
        .then(response =>
            Promise.resolve({
            data:response.json(),
            status: response.status
          })
          .then(post => post.data)
          .then(json =>json.artists)
          .then(items =>{

            ///datos del artista buscado
            console.log(items);

              const artist=items.items[0];
                this.setState(artist);
                FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
                fetch(FETCH_URL,{
                  method:'GET',
                  headers: {
                    'Content-Type' :'application/json',
                    'Authorization': auth_token,
                    },
                })
                .then(response =>response.json())
                .then(json => {
                  console.log('artist',json);
                  const tracks=json.tracks;
                  this.setState({tracks});
                })
      
        })
        );
      
      }
      
      
      render(){
        const Search = Input.Search;
            return (
              <div>
                
                <div className='back'>
                <h1>Spotify-common!</h1>
                <div className='bar-search'>
                
             <div>
               <strong><h3>Busca tu artista! >:D</h3></strong>
             <Search type="text" placeholder="Search music"
                      value ={this.state.query}
                      onChange={event =>{this.setState({query:event.target.value})}}
                      style={{ width: 400 }}
                      onKeyPress={event=>{
                        if(event.key==='Enter')
                          this.search();
                      }}/>
             </div>
            </div>
                </div>
                <div>
                  <Profile
                    artist={this.state}
                />
                </div>
                <div>
                <Gallery
                  tracks={this.state.tracks}
                />
                </div>
        </div>
      )
      
      }
      
      }

export default Inicio