import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Inicio from './components/index/Inicio';


const Routes = () => {
  return(
      <Switch>
          <Route exact path="/" component={Inicio} />
      </Switch>
  )
}

export default Routes