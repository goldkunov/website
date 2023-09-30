import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
//import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 600, alignSelf:'center' }}>
      <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                  Do you want to take test?
              </Typography>                   
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" onClick={() => navigate('test')}>Yes</Button>
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained">No</Button>
          </Grid>
      </Grid>
    </Box>  
    )
}

export default App
