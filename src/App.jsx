import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefautlLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefautlLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
