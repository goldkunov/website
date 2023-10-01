import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';

const MainPage = () => {
    const navigate = useNavigate();
    const [person, setPerson] = useStore((state) => [state.person.person, state.person.setPerson]);
    const [name, setName] = useState(person?.Name || '');
    const test = () => {
        setPerson({id: '', Name: name});
        navigate('/question/1');
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        What is your name?
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Enter Your Name" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => test()}>Take Test</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;