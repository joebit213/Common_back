import React, {Component} from 'react'
import {getMus} from './musService.js'


class Inicio extends Component{
  
  state = {
    music:[]
  }

  componentWillMount(){ 
    getMus()
        .then(event=>{
            this.setState({
                music: event.data.music
            })
        })
        .catch(error=>{
            return error
        })
}

componentDidUpdate() {
  getMus()
    .then(mus=>{
        this.setState({
          music: mus.data.music
        })
        //console.log(this.setState.music)
    })
    .catch(error=>{
        return error
    })
}

getMuisc = ()=>{
  getMus()
  .then(music=>{
      this.setState({music})
      //console.log(music)
  })
  .catch(e=>{
      //return toastr.error('Algo salio mal')}
      console.log(e)
      })
}

  render(){
    console.log(this.state.music)
      return(
          <div>
             hola
          </div>
      )
  }
}

export default Inicio