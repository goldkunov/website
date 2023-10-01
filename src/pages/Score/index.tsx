import { Box, Button, Grid, Typography } from "@mui/material"
import { useStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";

const ScorePage = () => {
    const [questions, answers, person] = useStore((state) => [
        state.questions.questions,
        state.answers.answers,
        state.person.person
      ]);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    useEffect(() => setScore(questions.reduce((score, question) => {
        if (answers.find(answer => answer.QuestionID.localeCompare(question.id) === 0 
                                                                && answer.AnswerID === question.AnswerID)){
            score++;
        }
        return score;
    }, 0)),[answers, questions])  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        {person?.Name}
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: score, label: 'Right' },
                                { id: 1, value: questions.length - score, label: 'Wrong' },
                            ],
                            },
                        ]}
                        width={600}
                        height={400}
                    />                
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