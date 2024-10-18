import React from 'react';
import Header from '../../components/header/Header'
import {Box, ListItemText, Typography} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function AboutMe() {

    const aboutMe = "<С детства увлекаюсь сферой IT. Люблю кодить и получаю удовольствие когда создаю что-то интересное. Всегда открыт всему новому и быстро обучаюсь. Я привык действовать независимо и без вмешательства, хотя мне нравится работать в команде. Так же творчески подхожу к решению проблем. >";
    const education1 = "2018-2022 гг. Бакалавриат \n Евразийский национальный университет имени Л. Н. Гумилёва, Астана \n Вычислительная техника и программное обеспечение";
    const education2 = "2022 г. Сентябрь-декабрь (неоконченное) MBA Евразийский национальный университет имени Л. Н. Гумилёва, Астана «Менеджмент инноваций и цифровой трансформации экономики»";
    const education3 = "2023-2025 гг. Магистратура Евразийский национальный университет имени Л. Н. Гумилёва, Астана Системы информационной безопасности";


    return (
      <div>
            <Header />
            <Typography variant="h4" fontFamily={'inter'} fontWeight={700} mt = {10} ml = {8}>
                ОБО МНЕ
            </Typography>
            <Typography fontFamily={'inter'} fontWeight={700} mt = {2} ml = {8} mr = {50} sx = {{fontSize:20}}>
                {aboutMe}
            </Typography>
            <Typography variant="h4" fontFamily={'inter'} fontWeight={700} mt = {4} ml = {8}>
                ОБРАЗОВАНИЕ
            </Typography>
            <Box fontWeight={700} fontStyle={'bold'} mt = {2} ml = {6} mr = {50} sx = {{fontSize:20}}>
                 <List sx = {{fontSize:20, fontStyle:'bold'}}>
                    <ListItem>
                        <ListItemText>
                            {education1}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {education2}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {education3}
                        </ListItemText>
                    </ListItem>
                 </List>
            </Box>
            <Typography fontStyle={'bold'}>
                DESIGNED BY AMIRBEK
            </Typography>
      </div>
    );
  }
  
export default AboutMe;