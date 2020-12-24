import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CardCreationContainer from './containers/CardCreationContainer'

export default function App() {
  return (
    <Router>
      <div className="App container  py-3 my-3">
        <Route exact path="/" component={CardCreationContainer} />
      </div>
    </Router>
  )

}


//         <CardCreationContainer />
// <Route exact path="/" component={Success} />
// <Route exact path="/" component={Error} />
