import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainPage from './pages/Main/index.tsx';
import QuestionPage, {loader as questionLoader} from './pages/Question/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}/>
      <Route path="test" element={<MainPage />} />
      <Route path="question/:questionId" element={<QuestionPage />} loader={questionLoader} />
    </>
)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
