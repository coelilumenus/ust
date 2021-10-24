import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { store } from "./redux/store"
import { ProtectedRoute } from "./utils/ProtectedRoute"

export const App: React.FC = () => {
  const isAuth: boolean = !store.getState().auth
  
  return <Router>
    <Switch>
      <ProtectedRoute isAuth={isAuth} path="/profile" component={() => <Profile />} />
      <Route path="/ust/" component={() => <Login />} exact />
    </Switch>
  </Router>
}
