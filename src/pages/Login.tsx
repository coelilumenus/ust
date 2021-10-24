import React from "react"
import { useHistory } from "react-router"
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { auth, setLogin } from "../redux/actions"
import { store } from "../redux/store"

export const Login: React.FC = () => {
  const [login, setInputLogin] = React.useState('')
  const [password, setInputPass] = React.useState('')
  const history = useHistory()
  const isDisabled: boolean = !store.getState().auth

  const handleAuth = () => {
    store.dispatch(setLogin(login))
    history.push('/profile')
  }

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    store.dispatch(auth(`${e.currentTarget.value}:${password}`))
    setInputLogin(e.currentTarget.value)
  }
  
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    store.dispatch(auth(`${login}:${e.currentTarget.value}`))
    setInputPass(e.currentTarget.value)
  }

  return <Container className="vh-100 d-flex align-items-center justify-content-center">
    <Form className="w-50">
      <FormGroup>
        <Label for="login">Login</Label>
        <Input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={(e) => handleLogin(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
      </FormGroup>
      <Button
        disabled={isDisabled}
        className="mt-3"
        onClick={handleAuth}
      >Submit</Button>
    </Form>
  </Container>
}