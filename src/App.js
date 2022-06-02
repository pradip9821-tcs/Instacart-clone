import React, { useContext } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import SkeletonProduct from './component/skeleton/skeletonProduct';
import StoreFrontPage from './pages/store-frontpage/store-frontpage.component';
import LogIn from './component/login/login.component';
import Location from './component/location/location.component';
import { HiddenContext } from './providers/hidden/hidden.provider';

const App = () => {

  const { lochidden, logInHidden } = useContext(HiddenContext)

  return (
    <div className='app'>
      <div>
        {logInHidden ? null : <LogIn />}
      </div>
      <div className='location-box'>
        {lochidden ? null : <Location />}
      </div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/storefront' component={StoreFrontPage} />
        <Route path='/skeleton' component={SkeletonProduct} />
      </Switch>
    </div>

  )
}

export default App;