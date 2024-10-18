import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import cer1 from '../../assets/certificates/1.png'
import cer2 from '../../assets/certificates/2.png'
import cer3 from '../../assets/certificates/3.png'
import cer4 from '../../assets/certificates/4.png'
import cer5 from '../../assets/certificates/5.png'
import cer6 from '../../assets/certificates/6.png'
import cer7 from '../../assets/certificates/7.png'
import cer8 from '../../assets/certificates/8.png'
import cer9 from '../../assets/certificates/9.jpeg'
import cer10 from '../../assets/certificates/10.jpeg'
import cer11 from '../../assets/certificates/11.jpeg'
import cer12 from '../../assets/certificates/12.jpeg'
import cer13 from '../../assets/certificates/13.jpeg'

const images = [
    { url: cer1, title: 'Certificate 1' },
    { url: cer2, title: 'Certificate 2' },
    { url: cer3, title: 'Certificate 3' },
    { url: cer4, title: 'Certificate 4' },
    { url: cer5, title: 'Certificate 5' },
    { url: cer6, title: 'Certificate 6' },
    { url: cer7, title: 'Certificate 7' },
    { url: cer8, title: 'Certificate 8' },
    { url: cer9, title: 'Certificate 9' },
    { url: cer10, title: 'Certificate 10' },
    { url: cer11, title: 'Certificate 11' },
    { url: cer12, title: 'Certificate 12' },
    { url: cer13, title: 'Certificate 13' }
]

const ImageCarousel = () => {
  return (
    <Carousel sx={{zIndex:0, width:'50%', height:'50%'}}>
      {images.map((image, index) => (
        <Paper key={index}>
          <Card>
            <CardMedia
              component="img"
              image={image.url}
              title={image.title}
              alt={image.title} // Соотношение сторон 16:9
            />
            <CardContent>
              <Typography variant="h6">{image.title}</Typography>
            </CardContent>
          </Card>
        </Paper>
      ))}
       </Carousel>
  );
};

export default ImageCarousel;
