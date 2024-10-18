import React from 'react';
import { Grid, Button, Typography, Box} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

const location = 'Kazakhstan, Astana'
const telega = '@KirigaiaKazuto'
const mail  = 'amirbek.mukushef@gmail.com'

function ContactInfo() {
    return (
      <Box style={{backgroundColor:'rgba(217, 217, 217, 1)',display: 'flex',position: 'relative', flexDirection: 'column', width: '90vh'}} mt={5}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold', justifyContent: 'center'}} startIcon={<LocationOnIcon />} >{location}</Button>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}} startIcon={<TelegramIcon/>} href=''>{telega}</Button>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx = {{backgroundColor:'transparent', color:'black', fontSize:'2vh', fontStyle: 'bold'}} startIcon={<EmailIcon/>} >{mail}</Button>
        </Grid>
        </Grid>
      </Box>
    );
  }
  
export default ContactInfo;