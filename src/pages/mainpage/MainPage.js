import React from 'react';
import Header from '../../components/header/Header'
import {Box, Typography} from '@mui/material'
import LottieAnimation from '../../components/mainpageanimation/mainpageanimation.js'
function MainPage() {
    return (
      <div className="mainpage">
            <Header />
            <LottieAnimation/>
            <Typography fontStyle={'bold'} mb = {0} sx = {{position: 'absolute'}}>
                DESIGNED BY AMIRBEK
            </Typography>
      </div>
    );
  }
  
export default MainPage;