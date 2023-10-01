import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import {
  type StoreFilter,
  type QuestionsSlice,
  type PeopleSlice,
  type AnswersSlice,
  type PersonSlice,
  type IQuestion,
  type IPerson,
  type IAnswer,
} from '../model/model.ts';

export const createQuestionsStore: StateCreator<
  StoreFilter,
  [['zustand/devtools', never]],
  [],
  QuestionsSlice
> = (set) => ({
  questions: {
    questions: [],
    setQuestions: (value: Array<IQuestion>) =>
      set(
        (prev: StoreFilter) => ({
          ...prev,
          questions: { ...prev.questions, questions: value },
        }),
        false,
        'setQuestions'
      ),
  },
});

export const createPeopleStore: StateCreator<
  StoreFilter,
  [['zustand/devtools', never]],
  [],
  PeopleSlice
> = (set) => ({
  people: {
    people: [],
    setPeople: (value: Array<IPerson>) =>
      set(
        (prev: StoreFilter) => ({
          ...prev,
          people: { ...prev.people, people: value },
        }),
        false,
        'setPeople'
      ),
  },
});

export const createAnswersStore: StateCreator<
  StoreFilter,
  [['zustand/devtools', never]],
  [],
  AnswersSlice
> = (set) => ({
  answers: {
    answers: [],
    setAnswers: (value: Array<IAnswer>) =>
      set(
        (prev: StoreFilter) => ({
          ...prev,
          answers: { ...prev.answers, answers: value },
        }),
        false,
        'setAnswers'
      ),
  },
});

export const createPersonStore: StateCreator<
  StoreFilter,
  [['zustand/devtools', never]],
  [],
  PersonSlice
> = (set) => ({
  person: {
    person: null,
    setPerson: (value: IPerson) =>
      set(
        (prev: StoreFilter) => ({
          ...prev,
          person: { ...prev.person, person: value },
        }),
        false,
        'setPerson'
      ),
  },
});

export const useStore = create<StoreFilter>()(
  devtools((...a) => ({
    ...createQuestionsStore(...a),
    ...createPeopleStore(...a),
    ...createAnswersStore(...a),
    ...createPersonStore(...a),
  }))
);
