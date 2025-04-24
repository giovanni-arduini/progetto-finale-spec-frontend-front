import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Contexts/GlobalContext";
import DefautlLayout from "./Layouts/DefaultLayout";
import ProductsDetail from "./Pages/ProductDetail";
import ProductsList from "./Pages/ProductsList";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefautlLayout />}>
              <Route path="/" element={<ProductsList />}></Route>
              <Route path="/guitars/:id" element={<ProductsDetail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
