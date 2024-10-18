import React from 'react';
import Header from '../../components/header/Header'
import { Grid, Typography, Box } from '@mui/material';
import Skills from '../../components/skills/Skills';
import WorkExp from '../../components/skills/WorkExp';

function Experience() {
    return(
        <Box>
            <Header />
            <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
            <Grid  item xs={4}>
                <Skills />
            </Grid>
            <Grid item xs = {8}>
                <WorkExp />
            </Grid>
            </Grid>
            </Box>
        </Box>
    );
}

export default Experience;