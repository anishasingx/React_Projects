import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import AllMarksheet from "./components/AllMarksheet";
import AddMarksheet from "./components/AddMarksheet";
import ShowMarksheet from "./components/ShowMarksheet";
import UpdateMarksheet from "./components/UpdateMarksheet";
import DeleteMarksheet from "./components/DeleteMarksheet";
import Header from "./components/components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/components/Footer";

const App = () => {

  const[marksheets,setMarksheet] = useState(
   [
    {
      id: 1,
      name: "Rohit Kumar",
      roll: 101,
      math: 78,
      science: 82,
      ssc: 75,
      english: 80,
      hindi: 74,
      total: 389,
    },
    {
      id: 2,
      name: "Anjali Singh",
      roll: 102,
      math: 88,
      science: 90,
      ssc: 85,
      english: 87,
      hindi: 83,
      total: 433,
    },
    {
      id: 3,
      name: "Amit Verma",
      roll: 103,
      math: 69,
      science: 72,
      ssc: 70,
      english: 68,
      hindi: 71,
      total: 350,
    },
    {
      id: 4,
      name: "Priya Kumari",
      roll: 104,
      math: 92,
      science: 89,
      ssc: 91,
      english: 90,
      hindi: 88,
      total: 450,
    },
  ]

  )

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<AllMarksheet marksheets={marksheets} />} />
          <Route path="/addMarksheet" element={<AddMarksheet marksheets={marksheets} setMarksheets={setMarksheet} />} />
          <Route path="/updateMarksheet" element={<ShowMarksheet />} />
          <Route path="/showMarksheet" element={<UpdateMarksheet />} />
          <Route path="/deleteMarksheet" element={<DeleteMarksheet marksheets={marksheets} setMarksheets={setMarksheet} />} />
        </Routes>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
};

export default App;
