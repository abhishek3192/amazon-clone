import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {
  const [{basket}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        console.log(authUser)
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      return (unsubscribe)
    }
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/checkout'>
           <Header />
           <Checkout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
