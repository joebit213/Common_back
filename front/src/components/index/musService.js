import axios from 'axios'

const url = "http://localhost:3000/"

export const getMus = () =>{
  return axios.get(url + "music")
  .then(event=>{
      return event
  })
  .catch(error=>{
      return error
  })
}