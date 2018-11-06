const express = require('express')
const router = express.Router()
const SpotifyWebApi = require('spotify-web-api-node')


// Credencials
const clientId = 'eb287830550245e5987ef0604580344c',
    clientSecret = '1054be579ea64a04be8ef445fb609935';

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});


///acceso a api
spotifyApi.clientCredentialsGrant()
  .then(function(data) {

    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

// //traer canciones
// router.get('/music',(req,res)=>{
  
//  
//     res.status(200).json({music})
//  
// })

///hacer busqueda
router.post('/music', (req,res)=>{
  const artista = req.body.artista
    spotifyApi.searchArtists(artista)
      .then(data =>{
        res.status(200).json({data})
      })
      .catch(err=>{
        console.log(err)
      })
})

// ///traer datos
// router.get('/albums/:id', (req,res)=>{
//   const id = req.params.id

//   spotifyApi.getArtistAlbums(id)
//   .then(data =>{
//     res.render('albums',data)
//   })
//   .catch(err=>{
//     console.log(err)
//   })
// })


module.exports = router