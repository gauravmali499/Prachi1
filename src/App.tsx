import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Homepage"
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { useState } from "react";
import { UserSignin } from "./components/UserSignin";
import { AdminSignin } from "./components/AdminSignin";
import { AddSurvey } from "./components/AddSurvey";
import { ManageSurvey } from "./components/ManageSurvey";
import { SurveyResult } from "./components/Result";
import { FeedBackForm } from "./components/FeedBackForm";

function App() {
  const [signup, setSignup] = useState([]);

  const addSignup = (e: any) => {
    signup.push(e)

    setSignup([...signup])
  }
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<Signup addSignup={addSignup} />} />
          <Route path='signin' element={<Signin signup={signup} />} />
          <Route path='user' element={<UserSignin />} />
          <Route path='admin' element={<AdminSignin />} />
          <Route path='addsurvey' element={<AddSurvey />} />
          <Route path='managesurvey' element={<ManageSurvey />} />
          <Route path='surveyresult' element={<SurveyResult />} />
          <Route path='feedback' element={<FeedBackForm />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

