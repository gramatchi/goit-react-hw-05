import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
