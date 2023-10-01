import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useLoaderData, useNavigate } from "react-router-dom";
import { Questions } from '../../api/Airtable';
import { useCallback, useEffect, useState } from 'react';
import { useStore } from '../../store/store';

export const loader = async ({ params } : any) => {
  return {questionId: parseInt(params.questionId)};
}

const QuestionPage = () => {
    const { questionId } : any = useLoaderData();
    const [questions, setQuestions, answers, setAnswers, person] = useStore((state) => [
        state.questions.questions,
        state.questions.setQuestions,
        state.answers.answers,
        state.answers.setAnswers,
        state.person.person
      ]);
    const [question, setQuestion] = useState<any>({});
    const [answer, setAnswer] = useState(1);
    const navigate = useNavigate();
    const loadQuestions = useCallback(() => {Questions().then(questions => setQuestions(questions))},[setQuestions]); 
    
    useEffect(() => loadQuestions(), []);
    
    useEffect(() => {
        if (questions.length > 0) {
            if (questionId > questions.length){
                navigate(`/question/${questions.length}`);
            } else if (questionId === 0) {
                navigate(`/test`);
            }
            else {
                setQuestion(questions[questionId-1])
            }   
        }
    },[questions, questionId]);

    const saveAnswer = (PersonID: string, QuestionID: string, AnswerID: number) => {
        const index = answers.findIndex(answer => answer.PersonID.localeCompare(PersonID)
                                                  + answer.QuestionID.localeCompare(QuestionID) === 0);
        if (index !== -1) {
            answers[index].AnswerID = AnswerID;
        } else {
            answers.push({ id:0, PersonID, QuestionID, AnswerID});
        }
        setAnswers(answers);
    }

    const previous = () => {
        saveAnswer(person?.id as string, question.id, answer);
        if (questionId > 1) {
            navigate(`/question/${questionId - 1}`);
        } else {
            navigate(`/test`);
        }
    }

    const next = () => {
        saveAnswer(person?.id as string, question.id, answer);
        if (questionId < questions.length) {
            navigate(`/question/${questionId + 1}`)
        } else {
            navigate(`/score`);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Question #{questionId}
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        {question?.['Question']}
                    </Typography>                   
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <RadioGroup onChange={(event) => setAnswer(parseInt(event.target.value))} value={answer}>
                            <Grid container spacing={2}>
                            {[1,2,3,4].map(index => <Grid item xs={6} key={`grid${index}`} textAlign='left'> 
                                    <FormControlLabel 
                                    key={`option${index}`} value={index} label={question?.[`Option ${index}`]} 
                                    control={<Radio/>}/>
                                </Grid>
                            )}
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" onClick={() => previous()}>
                    {questionId > 1 ? 'Previous' : 'Edit Name'}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={() => next()}>
                        {questionId === questions.length ? 'View Results' : 'Next'}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default QuestionPage;