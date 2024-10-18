import React from 'react';
import Header from '../../components/header/Header';
import { Grid, Typography, Box } from '@mui/material';
import ImageCarousel from '../../components/image-carousel/ImageCarousrl';

function Certificates() {
    return(
        <Box>
            <Header />
            <Box sx = {{marginTop:'5%',display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <ImageCarousel/>
            </Box>
        </Box>
    );
}

export default Certificates;