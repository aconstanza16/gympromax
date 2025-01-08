
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const App = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5">Socios Activos</Typography>
                    <Typography variant="h2">150</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default App;
            