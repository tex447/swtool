import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
<Jumbotron className="text-center">
  <h2>Character creation</h2>
<p>You will need to create a character in order to track stats in the game.</p>
  <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
</Jumbotron>
);
