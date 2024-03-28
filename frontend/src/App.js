import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Components/Home";
import Footer from "./Layout/Footer";
import Auth from "./Auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/auth"
          element={
            <>
              <Header />
              <Auth />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
