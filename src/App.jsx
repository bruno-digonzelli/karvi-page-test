import React from "react"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UsedCars from "./pages/UsedCars"

const App = () => {
  return (
    <Router>
      <Header city="Sao Paulo" />

      <div className="container">
        <Switch>
          <Route exact path="/" component={UsedCars} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
