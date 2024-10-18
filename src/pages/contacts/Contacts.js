import React from 'react';
import Header from '../../components/header/Header'
import { Grid, Button, Typography, Box  } from '@mui/material';
import ContactInfo from '../../components/contacts/ContactInfo';
import { MapContainer, TileLayer,useMap } from 'react-leaflet';
import { flushSync } from 'react-dom';



function Contacts() {
  const position = [51.1694, 71.4491];
    return (
      <Box>
        <Header/>
        <div style ={{display:'flex', justifyContent:'center'}}>
        <MapContainer center={position} zoom={10} scrollWheelZoom = {false} style = {{height:400, width:400, marginTop:'5vh'}}>
        <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
        </div>
        <Box sx ={{display:'flex', justifyContent:'center'}}>
        <ContactInfo/>
        </Box>
      </Box>
    );
  }
  
export default Contacts;