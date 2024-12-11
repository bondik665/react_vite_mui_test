import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

function ContactPage() {
  return (
    <>
      <Header />
      <Container maxWidth='md' sx={{ marginTop: 4 }}>
        <Typography variant='h4' align='center' gutterBottom>
          Контакты
        </Typography>
        <Typography variant='body1' align='center' paragraph>
          Если у вас есть вопросы или предложения, свяжитесь с нами через форму ниже.
        </Typography>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: 3,
          }}
        >
          <TextField label='Ваше имя' variant='outlined' fullWidth />
          <TextField label='Email' variant='outlined' fullWidth />
          <TextField label='Сообщение' variant='outlined' multiline rows={4} fullWidth />
          <Button variant='contained' color='primary' type='submit'>
            Отправить
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;