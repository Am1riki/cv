import React from 'react';
import { Grid, Button, Typography, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon  } from '@mui/material';
function Skills() {

const web = ['HTML', 'CSS', 'Bootstrap', 'MUI', 'JavaScript', 'ReactJS', 'Axios', 'Redux', 'TypeScript', 'NodeJS', 'ExpressJS']
const python = ['FastAPI', 'PyDantic', 'Alembic', 'SQLAlchemy', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Keras', 'Aiogram', 'Telegram-bot-api','OpenPyXL', 'OpenDocx', 'Streamlit']
const csharp = ['.NET', 'Windows Forms']
const database = ['SQL', 'MySQL', 'PostgreSQL', 'MS SQL', 'SQLite', 'MongoDB']
 
return(
    <div>
        <Box sx = {{backgroundColor:'rgba(217, 217, 217, 1)'}} mr = {'30%'} ml = {'5%'} >
            <Typography variant="h4" fontFamily={'inter'} fontWeight={700} mt = {2} ml = {8}>НАВЫКИ</Typography>
            <List>
                <ListItem>
                    <ListItemText>WEB</ListItemText>
                </ListItem>
                <Box ml={10}>
                {       web.map((item, index) => (
                            <ListItemText key={index}>{item}</ListItemText>
                        ))
                }        
                </Box> 
                <ListItem>
                    <ListItemText>Python</ListItemText>
                </ListItem>
                <Box ml={10}>
                {       python.map((item, index) => (
                            <ListItemText key={index}>{item}</ListItemText>
                        ))
                }        
                </Box>
                <ListItem>
                    <ListItemText>C#</ListItemText>
                </ListItem>
                <Box ml={10}>
                {       csharp.map((item, index) => (
                            <ListItemText key={index}>{item}</ListItemText>
                        ))
                }        
                </Box>
                <ListItem>
                    <ListItemText>Database</ListItemText>
                </ListItem>
                <Box ml={10}>
                {       database.map((item, index) => (
                            <ListItemText key={index}>{item}</ListItemText>
                        ))
                }        
                </Box>
            </List>
        </Box>
    </div>
);
}

export default Skills;