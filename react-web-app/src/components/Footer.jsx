import * as React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        marginTop: '40px',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' gutterBottom>
              О нас
            </Typography>
            <Typography variant='body2'>
              lorem ipsum
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' gutterBottom>
              Контакты
            </Typography>
            <Typography variant='body2'>
              Email: info@example.com
              <br />
              Телефон: +7 (123) 456-78-90
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' gutterBottom>
              Социальные сети
            </Typography>
            <Link href='#' color='inherit' underline='none'>
              Facebook
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Twitter
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Instagram
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;