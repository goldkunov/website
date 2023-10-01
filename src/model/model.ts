export interface IQuestion {
    id: string;
    Question: string;
    'Option 1': string;
    'Option 2': string;
    'Option 3': string;
    'Option 4': string;
    AnswerID: number;
}
  
export interface IPerson {
    id: string;
    Name: string;
}
  
export interface IAnswer {
    id: number;
    PersonID: string;
    QuestionID: string;
    AnswerID: number;
}

export interface QuestionsSlice {
    questions: {
      questions: Array<IQuestion>;
      setQuestions: (questions: Array<IQuestion>) => void;
    };
}

export interface PeopleSlice {
    people: {
      people: Array<IPerson>;
      setPeople: (people: Array<IPerson>) => void;
    };
}

export interface AnswersSlice {
    answers: {
      answers: Array<IAnswer>;
      setAnswers: (answers: Array<IAnswer>) => void;
    };
}

export interface PersonSlice {
    person: {
      person: IPerson | null;
      setPerson: (person: IPerson) => void;
    };
}
  
  export type StoreFilter = QuestionsSlice &
    PeopleSlice &
    AnswersSlice &
    PersonSlice;
  