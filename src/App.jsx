import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Contexts/GlobalContext";
import { CompareProvider } from "./Contexts/CompareContext";
import { FavoritesProvider } from "./Contexts/FavoritesContext";
import DefaultLayout from "./Layouts/DefaultLayout";
import ProductsDetail from "./Pages/ProductDetail";
import ProductsList from "./Pages/ProductsList";

function App() {
  return (
    <>
      <GlobalProvider>
        <FavoritesProvider>
          <CompareProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<DefaultLayout />}>
                  <Route path="/" element={<ProductsList />}></Route>
                  <Route
                    path="/guitars/:id"
                    element={<ProductsDetail />}
                  ></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </CompareProvider>
        </FavoritesProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
