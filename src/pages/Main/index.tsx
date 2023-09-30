import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        What is your name?
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Enter Your Name" id="name" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => navigate('/question/1')}>Take Test</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;