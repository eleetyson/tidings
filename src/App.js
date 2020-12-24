import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CardCreationContainer from './containers/CardCreationContainer'
import Success from './components/Success'
import Error from './components/Error'

// only want success and error routes to be accessible post-payment
export default function App() {
  let senderName = localStorage.getItem('senderName')
  let remotePicture = localStorage.getItem('remotePicture')
  let remoteAddress = localStorage.getItem('remoteAddress')

  return (
    <Router>
      <div className="App container  py-3 my-3">
        <Route exact path="/">
          <CardCreationContainer />
        </Route>

        <Route exact path="/success">
          { !senderName || !remotePicture || !remoteAddress ? <Redirect to="/" /> : <Success /> }
        </Route>

        <Route exact path="/error">
          { !senderName || !remotePicture || !remoteAddress ? <Redirect to="/" /> : <Error /> }
        </Route>
      </div>
    </Router>
  )

}

// let senderName = localStorage.getItem('senderName')
// let remotePicture = localStorage.getItem('remotePicture')
// let remoteAddress = localStorage.getItem('remoteAddress')

// { senderName && remotePicture && remoteAddress ? <Redirect to="/" /> : <Success /> }
