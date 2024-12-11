import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Typography, Box, Button, Paper, Grid, Card, CardMedia, CardContent } from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Paper
          sx={{
            backgroundImage: `url(https://img3.akspic.ru/crops/7/3/3/9/7/179337/179337-8k_priroda-priroda-planshet-voda-gidroresursy-3840x2160.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          />

          <Container fixed>
            <Grid container>
              <Grid
                item
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Typography component='h1' color='inherit' gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Заголовок
                  </Typography>
                  <Typography component='h5' color='inherit' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Перейти
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div style={{ padding: '32px', textAlign: 'center' }}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              web developer
            </Typography>
            <Typography variant='h5' color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati amet error aut nemo ex molestias dolores mollitia veritatis! Inventore quos modi aliquam doloribus error dolorem illo dolore asperiores mollitia?
            </Typography>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Присоединиться
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Подробнее
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth='md' sx={{ marginTop: 4, padding: 2 }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='140'
                    image='https://img3.akspic.ru/crops/7/3/3/9/7/179337/179337-8k_priroda-priroda-planshet-voda-gidroresursy-3840x2160.jpg'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Заголовок {card}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Это описание карточки {card}.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;