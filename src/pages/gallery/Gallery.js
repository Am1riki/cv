import React from 'react';
import Header from '../../components/header/Header'
import { Grid, Typography, Box, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import diogenes from '../../assets/projectscreenshots/diogenes/Снимок экрана 2024-07-20 в 23.12.51.png';
import shabloner from '../../assets/projectscreenshots/shabloner/Снимок экрана 2024-07-20 в 23.10.13.png'
import refacer from '../../assets/projectscreenshots/refacer/2024-07-21 01.15.26.jpg'
import roadmapper from '../../assets/projectscreenshots/roadmapper/Снимок экрана 2024-07-21 в 01.31.50.png'

const projects = [
{
    name: 'Diogenes',
    scr: diogenes,
    description: 'Телеграм бот для быстрого доступа к некоторым документам. Сделано на Python с использованием Aiogram для проектирования бота и Pydrive для доступа к файлам из Google Диск.'
},
{
    name: 'Shabloner',
    scr: shabloner,
    description: 'Сайт-платформа для облегчения некоторых вещей на работе. Есть работа с документооборотом для работы, календарь дежурств и хранилище файлов, шаблонов и отчетов. Сделан с помощью JavaScript, Python и библиотекой Streamlit. Так же есть связь с базой данных MySQL, связь с которой работает через SQLAlchemy.'
},
{
    name: 'ReFacer',
    scr: refacer,
    description: 'Десктопное приложение для замены лиц на фото и видео. Работает на OpenCV и dlib. Пользовательский интерфейс сделан на Python Kivy. Это моя дипломная работа.'
},
{
    name: 'RoadMapper',
    scr: roadmapper,
    description: 'Пет проект сделанный полностью на JavaScript. Проект это платформа для цифровизации работы ВУЗа.  Пользовательская часть сделан на ReactJS, Бэкенд на NodeJS и ExpressJS. СУБД для базы данных PostgreSQL.  '
}
]


function Gallery() {
    return(
        <Box>
        <Header />
        <Typography ml = {10}>*В данной вкладке представлены только несколько моих проектов</Typography>
        <Grid container spacing={2} style={{ overflowX: 'auto' }}>
        {
        projects.map((item, index)=>{
            let imgPath = item.scr;
            return(
                <Card sx={{ maxWidth: 250, marginTop: 10, marginLeft: 5 }} key = {index}>
                <CardActionArea key = {index}>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.scr}
                  alt='img'
                  key = {index}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>);
            })
        }
        </Grid>
    </Box>
    );
}

export default Gallery;