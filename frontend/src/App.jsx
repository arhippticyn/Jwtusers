import { lazy, Suspense, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
