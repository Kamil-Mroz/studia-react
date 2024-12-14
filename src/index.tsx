import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Students from "./Students";
import AddStudent from "./AddStudent";
import EditStudentComponent from "./EditStudentComponent";
import { StudentProvider } from "./studentContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StudentProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Students />}></Route>
        <Route path="/student/add" element={<AddStudent />}></Route>
        <Route
          path="/student/:index_nr"
          element={<EditStudentComponent />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StudentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
