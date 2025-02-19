import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const About = () => {

  return (
    <Container
    maxWidth="lg"
    component="main"
    sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
  >
     <Typography variant="h1" gutterBottom>
     About Me
        </Typography>
    </Container>
  );
};

export default About;