import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { S } from "./style/center.styled";

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <S.Center>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </S.Center>
    </BrowserRouter>
  );
};

export default AppRouter;
