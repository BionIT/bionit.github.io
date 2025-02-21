import * as React from 'react';
import Container from '@mui/material/Container';
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';


const Home = () => {
  return (
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
  );
};

export default Home;
