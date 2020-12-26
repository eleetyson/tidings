import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CardCreationContainer from './containers/CardCreationContainer'
import Success from './components/Success'
import Error from './components/Error'
import AboutContainer from './containers/AboutContainer'

// success and error routes are only accessible after payment
export default function App() {

  const necessaryInfoStoredYet = () => {
    let senderName = localStorage.getItem('senderName')
    let remotePicture = localStorage.getItem('remotePicture')
    let remoteAddress = localStorage.getItem('remoteAddress')

    return !!senderName && !!remotePicture && !!remoteAddress
  }

  return (
    <Router>
      <div className="App container  py-3 my-3">
        <Route exact path="/">
          <CardCreationContainer />
        </Route>

        <Route exact path ="/about">
          <AboutContainer />
        </Route>

        <Route exact path="/success">
          { necessaryInfoStoredYet() ? <Success /> : <Redirect to="/" /> }
        </Route>

        <Route exact path="/error">
          { necessaryInfoStoredYet() ? <Error /> : <Redirect to="/" /> }
        </Route>
      </div>
    </Router>
  )

}
