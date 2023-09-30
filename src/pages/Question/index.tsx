import { Box, Button, Grid, Typography } from '@mui/material';
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async ({ params } : any) => {
  return {questionId: parseInt(params.questionId)};
}

const QuestionPage = () => {
    const { questionId } : any = useLoaderData();
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Question #{questionId}
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                </Grid>
                {questionId > 1 && <Grid item xs={6}>
                    <Button variant="contained" onClick={() => navigate(`/question/${questionId - 1}`)}>Previous</Button>
                </Grid>}
                <Grid item xs={questionId == 1 ? 12 : 6}>
                    <Button variant="contained" onClick={() => navigate(`/question/${questionId + 1}`)}>Next</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default QuestionPage;