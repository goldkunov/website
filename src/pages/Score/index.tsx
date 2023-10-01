import { Box, Button, Grid, Typography } from "@mui/material"
import { useStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

const ScorePage = () => {
    const [questions, answers, person] = useStore((state) => [
        state.questions.questions,
        state.answers.answers,
        state.person.person
      ]);
      const navigate = useNavigate();
      const score = questions.reduce((score, question) => {
        if (answers.find(answer => answer.QuestionID === question.id && answer.AnswerID === question.AnswerID)){
            score++;
        } 
        return score;
    },0);  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        {person?.Name}, your score
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        {score} out of {questions.length}
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => navigate(`/question/1`)}>Try Again</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ScorePage;