import React from 'react';
import '@fontsource/inter';
import { Grid, Button, Typography, Box  } from '@mui/material';
import image from '../../assets/images/photo.png'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const fio = 'MUKUSHEV AMIRBEK'
    const text = '<Developer>'


    return (
      <header style={{backgroundColor:'rgba(217, 217, 217, 1)',display: 'flex',position: 'relative', flexDirection: 'column', justifyContent: 'space-between'}}>

        <Box
        component="img"
        src={image}
        alt="Background"
        sx={{
          position: 'absolute',
          right: '10%',
          zIndex:1,
        }}/>

        <Typography variant="h2" fontFamily={'inter'} fontWeight={700} sx = {{mt:'5vh', ml: '10vh'}}>{fio}</Typography>
        <Typography variant="h4" fontWeight={700} fontStyle={'bold'} sx = {{ml: '10vh'}}>{text}</Typography>
        <Grid container spacing={12} justifyContent="left" alignItems="center" mt={4} ml={10}>
            <Grid>
                <Button onClick={()=>{navigate('/')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Главная</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>{navigate('/aboutMe')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Обо мне</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>{navigate('/experience')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Опыт/Навыки</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>{navigate('/gallery')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Галерея проектов</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>{navigate('/certificates')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Сертификаты</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>{navigate('/contacts')}} size="large" sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}}>Контакты</Button>
            </Grid>
        </Grid>
      </header>
    );
  }
  
export default Header;