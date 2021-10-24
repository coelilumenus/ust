import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { store } from "../redux/store";

export const Profile: React.FC = () => {
  return <Container className="vh-100 d-flex justify-content-center">
    <Jumbotron className="w-50">
      <h1 className="display-3">{store.getState().login}</h1>
    </Jumbotron>
  </Container>
}