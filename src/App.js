import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CardCreationContainer from './containers/CardCreationContainer'
import Success from './components/Success'
import Error from './components/Error'

export default function App() {
  return (
    <Router>
      <div className="App container  py-3 my-3">
        <Route exact path="/" component={CardCreationContainer} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/error" component={Error} />
      </div>
    </Router>
  )

}
