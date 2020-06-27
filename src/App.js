import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Typography, Grid, Paper,Button  } from '@material-ui/core';
import ImageGridList from './Components/ImageGridList';
import Header from './Components/Header';
import CardImage from './Components/CardImage';

function App() {
  return (
    <>
<Header/>
    <Container>
      <ImageGridList/>
    </Container>
   </>

  );
}

export default App;
