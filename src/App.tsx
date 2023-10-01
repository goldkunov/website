import { Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './App.css'

function App() {
  const navigate = useNavigate();
  const [rickRoll, setRickRoll] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 600, alignSelf:'center' }}>
      <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                  Do you want to take test?
              </Typography>                   
          </Grid>
          {rickRoll && <Grid item xs={12}>
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1&rel=0;modestbranding=1&showsearch=0"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                frameBorder={0}
                allow="autoplay; encrypted-media; modestbranding;"/>
          </Grid>}
          <Grid item xs={6}>
              <Button variant="contained" onClick={() => {setRickRoll(false); navigate('test');}}>Yes</Button>
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" onClick={() => setRickRoll(true)}>No</Button>
          </Grid>
      </Grid>
    </Box>  
    )
}

export default App
